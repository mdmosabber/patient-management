<?php

namespace Tests\Feature;

use App\Models\Patient;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;


class PatientControllerTest extends TestCase
{

    use RefreshDatabase, WithFaker;

    protected function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create();
        $this->actingAs($this->user);
    }

    public function test_index()
    {
        Patient::factory()->count(10)->create();

        $response = $this->get(route('patient.index'));

        $response->assertStatus(200);
    }

    public function test_create()
    {
        $response = $this->get(route('patient.create'));

        $response->assertStatus(200);
    }

    public function test_store()
    {
        $data = [
            'first_name' => 'John',
            'last_name' => 'Doe',
            'email' => 'john.doe@example.com',
            'phone' => '1234567890',
            'address' => '123 Main St',
        ];

        $response = $this->post(route('patient.store'), $data);

        $response->assertRedirect(route('patient.index'));
        $response->assertSessionHas('success', 'Patient created successfully');
        $this->assertDatabaseHas('patients', ['email' => 'john.doe@example.com']);
    }

    public function test_edit()
    {
        $patient = Patient::factory()->create();

        $response = $this->get(route('patient.edit', $patient->id));

        $response->assertStatus(200);
    }


    public function test_update()
    {
        $patient = Patient::factory()->create();

        $data = [
            'first_name' => 'Jane',
            'last_name' => 'Doe',
            'phone' => '0987654321',
            'address' => '456 Another St',
        ];

        $response = $this->put(route('patient.update', $patient->id), $data);

        $response->assertRedirect(route('patient.index'));
        $response->assertSessionHas('success', 'Patient updated successfully');
        $this->assertDatabaseHas('patients', ['first_name' => 'Jane']);
    }

    public function test_destroy()
    {
        $patient = Patient::factory()->create();

        $response = $this->delete(route('patient.destroy', $patient->id));

        $response->assertRedirect(route('patient.index'));
        $response->assertSessionHas('success', 'Patient deleted successfully');
        $this->assertDatabaseMissing('patients', ['id' => $patient->id]);
    }

}
