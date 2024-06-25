<?php

namespace App\Services;

use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

Final class PatientService
{
    public function searchPatients($query)
    {
        return Patient::query()
            ->when($query, function ($query, $search) {
                $query->where('first_name', 'LIKE', "%$search%")
                    ->orWhere('last_name', 'LIKE', "%$search%")
                    ->orWhere('email', 'LIKE', "%$search%")
                    ->orWhere('phone', 'LIKE', "%$search%")
                    ->orWhere('address', 'LIKE', "%$search%");
            })
            ->latest()
            ->paginate(5);
    }

    public function createPatient(array $data)
    {
        return Patient::create($data);
    }



    public function updatePatient(Patient $patient, array $data)
    {
        $patient->update($data);
        return $patient;
    }

    public function deletePatient(Patient $patient)
    {
        $patient->delete();
    }
}
