<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminRequest;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Intervention\Image\Facades\Image;


class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }


    public function allUserView(Request $request){

        $query = $request->input('search');

        $users = User::query()
            ->when($query, function ($query, $search) {
                $query->where('name', 'LIKE', "%$search%");
                $query->orWhere('email', 'LIKE', "%$search%");
                $query->orWhere('phone', 'LIKE', "%$search%");
            })
            ->paginate(20);

        return Inertia::render('backend/user/Index',['users'=>$users]);
    }

    public function adminSearch (Request $request){
        return $this->allUserView($request);
    }


    public function userCreate(){     
        return Inertia::render('backend/user/Create');
    }

    public function userStore (AdminRequest $request):RedirectResponse{

        $validated = $request->validated();
        $imagePath = '';

        if ($request->hasFile('image')) {
            $image = $request->file('image');

            $imageName = uniqid() . '_' . time() . '_user_image.' . $image->getClientOriginalExtension();
            $directory = 'assets/images/';
            $image->move($directory, $imageName);
            $imagePath =  $directory. $imageName;
        }

        $user = new User([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'password' => Hash::make($validated['password']),
        ]);
        $user->created_by = Auth::user()->name;

        if ($imagePath !== '') {
            $user->image = $imagePath;
        }

        $user->save();

         return Redirect::route('admin.show')->with('success', 'User Create Successfully');
    }


    public function userEdit($id){
        $user = User::findOrFail($id);   

        return Inertia::render('backend/user/Edit',['user'=> $user]);
    }


    public function userUpdate(AdminRequest $request, $id)
    {
        $user = User::findOrFail($id);

        $validated = $request->validated();


        if ($request->hasFile('image') ) {

            if (file_exists($user->image)) {
                unlink($user->image);
            }

            $image = $request->file('image');
            $imageName = uniqid() . '_' . time() . '_user_image.' . $image->getClientOriginalExtension();
            $directory = 'assets/images/';
            $image->move($directory, $imageName);

            $user->image = $directory . $imageName;
        }

        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->phone = $validated['phone'];
        $user->password = Hash::make($validated['password']);
        $user->updated_by = Auth::user()->name;
        $user->save();

        return redirect()->route('admin.show')->with('success', 'User updated successfully');
    }

    public function userDelete($id){

        $user =  User::findOrFail($id);

        if(file_exists($user->image )){
            unlink( $user->image );
        }

        if(!is_null($user)){
            $user->delete();
            $user->deleted_by = Auth::user()->name;
            $user->save();
        }

        return redirect()->back()->with('success', 'User delete successfully');
    }


    public function trashed(){
        $trasheds = User::onlyTrashed()->get();
        return Inertia::render('backend/user/Trashed',['trasheds'=>$trasheds]);
    }

    public function restore($id){
        User::withTrashed()->findOrFail($id)->restore();
        return redirect()->route('admin.show')->with('success', 'User restore successfully');
    }

    public function permanentDelete($id){

        $user =  User::onlyTrashed()->findOrFail($id);

        if (file_exists($user->image)) {
            unlink($user->image);
        }

        if(!is_null($user)){
            $user->forceDelete();
        }

        return redirect()->route('admin.show')->with('success', 'User permanent delete successfully');
    }



}
