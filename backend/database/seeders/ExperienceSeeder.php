<?php

namespace Database\Seeders;
use App\Models\Experience;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Experience::create([
             'position'=>'full satck developer',
            'company_name' => 'Software Engineer',
            'description' => 'Develop software applications',
            'from' => '2022-12-31',
            'to' => '2023-12-31',
            
            'user_id' => 1,
        ]);

        Experience::create([
            'position' => 'Full stacke web developer',
            'company_name' => 'Full stacke web developer',
            'description' => 'Develop software applications',
            'from' => '2022-12-31',
            'to' => '2023-12-31',
            
            'user_id' => 1,
        ]);
    }
}
