<?php

namespace Database\Seeders;
use App\Models\UserSkill;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UserSkill::create([
            'user_id' => 1,
            'skill_name' => 'Programming',
        ]);
        UserSkill::create([
            'user_id' => 2,
            'skill_name' => 'Database Management',
        ]);
    }
}
