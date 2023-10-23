<?php

namespace Database\Seeders;

use App\Models\Job;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Job::create([

            'title' => 'Software Engineer',
            'description' => 'Develop software applications',
            'salary' => 800,
            'deadline_date' => '2023-12-31',
            'professional_level' => 'Junior',
            'location_type' => 'On-site',
            'employment_type' => 'Full-time',
            'company_id' => 1,
        ]);

        Job::create([

            'title' => 'Software Engineer',
            'description' => 'Develop software applications',
            'salary' => 800,
            'deadline_date' => '2023-12-31',
            'professional_level' => 'Mid-Senior Level',
            'location_type' => 'On-site',
            'employment_type' => 'Full-time',
            'company_id' => 1,
        ]);
        Job::create([

            'title' => 'Data Analyst',
            'description' => 'Analyze and interpret data',
            'salary' => 600,
            'deadline_date' => '2023-12-15',
            'professional_level' => 'Entry Level',
            'location_type' => 'Remote',
            'employment_type' => 'Part-time',
            'company_id' => 1,
        ]);
        Job::create([

            'title' => 'Data Analyst',
            'description' => 'Analyze and interpret data',
            'salary' => 600,
            'deadline_date' => '2023-12-15',
            'professional_level' => 'Senior',
            'location_type' => 'Hybrid',
            'employment_type' => 'Freelancer',
            'company_id' => 2,
        ]);
        Job::create([

            'title' => 'Data Analyst',
            'description' => 'Analyze and interpret data',
            'salary' => 600,
            'deadline_date' => '2023-12-15',
            'professional_level' => 'Senior',
            'location_type' => 'Remote',
            'employment_type' => 'Freelancer',
            'company_id' => 3,
        ]);
        Job::create([

            'title' => 'Data Analyst',
            'description' => 'Analyze and interpret data',
            'salary' => 600,
            'deadline_date' => '2023-12-15',
            'professional_level' => 'Entry Level',
            'location_type' => 'On-site',
            'employment_type' => 'Part-time',
            'company_id' => 3,
        ]);
        Job::create([

            'title' => 'Data Analyst',
            'description' => 'Analyze and interpret data',
            'salary' => 600,
            'deadline_date' => '2023-12-15',
            'professional_level' => 'Entry Level',
            'location_type' => 'On-site',
            'employment_type' => 'Internship',
            'company_id' => 5,
        ]);
        Job::create([

            'title' => 'Data Analyst',
            'description' => 'Analyze and interpret data',
            'salary' => 600,
            'deadline_date' => '2023-12-15',
            'professional_level' => 'Entry Level',
            'location_type' => 'Hybrid',
            'employment_type' => 'Internship',
            'company_id' => 2,
        ]);
    }
}
