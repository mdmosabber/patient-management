<?php

namespace Tests\Unit;

use App\Models\Patient;
use App\Services\PatientService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PatientServiceTest extends TestCase
{
    use RefreshDatabase;

    protected $patientService;

    protected function setUp(): void
    {
        parent::setUp();
        $this->patientService = new PatientService();
    }

    public function test_search_patients()
    {
        Patient::factory()->count(10)->create();

        $result = $this->patientService->searchPatients('John');

        $this->assertInstanceOf(\Illuminate\Pagination\LengthAwarePaginator::class, $result);
    }

    public function test_create_patient()
    {
        $data = [
            'first_name' => 'John',
            'last_name' => 'Doe',
            'email' => 'john.doe@example.com',
            'phone' => '1234567890',
            'address' => '123 Main St',
            'gender' => 'male',
            'age' => '30',
            'date' => '2024-06-04',
            'time' => '19:40:29',
            'image' => 'https://via.placeholder.com/640x480.png/00eeee?tex...',
        ];

        $patient = $this->patientService->createPatient($data);

        $this->assertInstanceOf(Patient::class, $patient);
        $this->assertEquals('John', $patient->first_name);
    }

    public function test_update_patient()
    {
        $patient = Patient::factory()->create();

        $data = [
            'first_name' => 'Jane',
            'last_name' => 'Doe',
            'email' => 'jane.doe@example.com',
            'phone' => '0987654321',
            'address' => '456 Another St',
            'gender' => 'male',
            'age' => '30',
            'date' => '2024-06-04',
            'time' => '19:40:29',
            'image' => 'https://via.placeholder.com/640x480.png/00eeee?tex...',
        ];

        $updatedPatient = $this->patientService->updatePatient($patient, $data);

        $this->assertEquals('Jane', $updatedPatient->first_name);
    }

    public function test_delete_patient()
    {
        $patient = Patient::factory()->create();

        $this->patientService->deletePatient($patient);

        $this->assertNull(Patient::find($patient->id));
    }
}
