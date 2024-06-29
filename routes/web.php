<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PatientController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('front-end/home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('backend/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::controller(ProfileController::class)->group(function (){
        Route::get('/profile',  'edit')->name('profile.edit');
        Route::patch('/profile',  'update')->name('profile.update');
        Route::delete('/profile',  'destroy')->name('profile.destroy');

        Route::get('user/show', 'allUserView')->name('admin.show');
        Route::post('user/search', 'adminSearch')->name('user.search');
        Route::get('user/create', 'userCreate')->name('admin.create');
        Route::post('user/create', 'userStore')->name('admin.store');
        Route::get('user/edit/{id}', 'userEdit')->name('admin.edit');
        Route::post('user/update/{id}', 'userUpdate')->name('admin.update');
        Route::delete('user/delete/{id}', 'userDelete')->name('admin.delete');

        Route::get('user/trashed', 'trashed')->name('admin.trashed-view');
        Route::get('user/restore/{id}', 'restore')->name('admin.user.restore');
        Route::delete('user/permanent/delete/{id}', 'permanentDelete')->name('admin.permanent-delete');
    });


    //====== Patient ======
    Route::post('patient/update/{id}',[PatientController::class, 'update'])->name('patient.update.post');
    Route::resource('patient', PatientController::class);

});





require __DIR__.'/auth.php';
