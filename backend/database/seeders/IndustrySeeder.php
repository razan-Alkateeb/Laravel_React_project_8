<?php

namespace Database\Seeders;

use App\Models\Industry;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IndustrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Industry::create([
            'name' => 'IT & Software',
            'logo' => 'uim-layers-alt'
        ]);
        Industry::create([
            'name' => 'Accounting',
            'logo' => 'uim-user-md'
        ]);
        Industry::create([
            'name' => 'Tele-communications',
            'logo' => 'uim-telegram-alt'
        ]);
        Industry::create([
            'name' => 'Human Resource',
            'logo' => 'uim-android-alt'
        ]);
    }
}
