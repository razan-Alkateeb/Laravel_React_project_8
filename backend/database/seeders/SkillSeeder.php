<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Skill::create([
            'job_id' => 1,
            'skill_name' => 'Programming',
        ]);
        Skill::create([
            'job_id' => 2,
            'skill_name' => 'Database Management',
        ]);
        Skill::create([
            'job_id' => 3,
            'skill_name' => 'Database Management',
        ]);
        Skill::create([
            'job_id' => 4,
            'skill_name' => 'Database Management',
        ]);
        Skill::create([
            'job_id' => 5,
            'skill_name' => 'Database Management',
        ]);
        Skill::create([
            'job_id' => 6,
            'skill_name' => 'Database Management',
        ]);
        Skill::create([
            'job_id' => 7,
            'skill_name' => 'Database Management',
        ]);
        Skill::create([
            'job_id' => 8,
            'skill_name' => 'Database Management',
        ]);
    }
}
