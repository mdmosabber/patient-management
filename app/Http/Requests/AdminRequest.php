<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $userId = $this->route('id');

        if ($this->routeIs('admin.store')) {
            return [
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'phone' => 'required|string|max:20',
                'password' => 'required|string',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
            ];
        } elseif ($this->routeIs('admin.update')) {
            return [
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email,' . $userId,
                'phone' => 'required|string|max:20',
                'password' => 'required|string',
            ];
        }

        return [];
    }


}
