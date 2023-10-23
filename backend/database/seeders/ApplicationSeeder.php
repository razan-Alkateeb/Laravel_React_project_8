<?php

namespace Database\Seeders;

use App\Models\Application;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ApplicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Application::create([
            'user_id' => 1,
            'job_id' => 1,
            'status' => 'Pending',
        ]);
        Application::create([
            'user_id' => 2,
            'job_id' => 2,
            'status' => 'Accepted',
        ]);
    }
}
