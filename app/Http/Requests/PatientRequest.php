<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PatientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if ($this->routeIs('patient.store')) {
            return [
                'first_name' => 'required|string|max:255',
                'last_name'  => 'required|string|max:255',
                'email'      => 'nullable|email|unique:patients,email',
                'phone'      => 'required|string|max:20',
                'address'    => 'required|string',

                'gender'     => 'required|in:male,female',
                'age'       => 'required|integer',
                'date'      => 'required|date',
                'time'      => 'required|string',
                'image'      => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',

            ];
        } elseif ($this->routeIs('patient.update')) {
            return [
                'first_name' => 'required|string|max:255',
                'last_name'  => 'required|string|max:255',
                'phone'      => 'required|string|max:20',
                'address'    => 'required|string',

                'gender'     => 'required|in:male,female',
                'age'       => 'required|integer',
                'date'      => 'required|date',
                'time'      => 'required|string',
            ];
        }
        return [];
    }
}
