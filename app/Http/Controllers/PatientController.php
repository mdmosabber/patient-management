<?php

namespace App\Http\Controllers;

use App\Http\Requests\PatientRequest;
use App\Models\Patient;
use App\Services\PatientService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Inertia\Response;

class PatientController extends Controller
{
    private $patientService;

    public function __construct(PatientService $patientService)
    {
        $this->patientService = $patientService;
    }

    public function index(Request $request):Response
    {
        $query = $request->input('search');
        $patients = $this->patientService->searchPatients($query);

        return Inertia::render('backend/patient/Index', ['patients' => $patients]);
    }

    public function create():Response
    {
        return Inertia::render('backend/patient/Create');
    }

    public function store(PatientRequest $request):RedirectResponse
    {
        try {
            $validated = $request->validated();

            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $imageName = uniqid() . '_' . time() . '_patient_image.' . $file->getClientOriginalExtension();
                $directory = 'assets/images/patient/';
                $file->move($directory, $imageName);
                $validated['image'] =  $directory. $imageName;;
            }

            $this->patientService->createPatient($validated);

            return Redirect::route('patient.index')->with('success', 'Patient created successfully');
        } catch (\Exception $e) {
            return Redirect::back()->with('error', 'An error occurred while creating the patient.')->withInput();
        }
    }



    public function edit(Patient $patient):Response
    {
        return Inertia::render('backend/patient/Edit', ['patient' => $patient]);
    }

    public function update(PatientRequest $request, Patient $patient):RedirectResponse
    {
        try {
            $validated = $request->validated();
            $this->patientService->updatePatient($patient, $validated);

            return Redirect::route('patient.index')->with('success', 'Patient updated successfully');
        } catch (\Exception $e) {
            return Redirect::back()->with('error', 'An error occurred while updating the patient.')->withInput();
        }
    }

    public function destroy(Patient $patient):RedirectResponse
    {
        $this->patientService->deletePatient($patient);
        return Redirect::route('patient.index')->with('success', 'Patient deleted successfully');
    }
}
