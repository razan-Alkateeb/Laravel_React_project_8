<?php

namespace Database\Seeders;

use App\Models\UserLanguage;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserLanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UserLanguage::create([
            'user_id' => 1,
            'language_id' => 1,
            'level' => 'Intermediate',
        ]);
        UserLanguage::create([
            'user_id' => 2,
            'language_id' => 2,
            'level' => 'Advanced',
        ]);
    }
}
