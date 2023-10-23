<?php

namespace Database\Seeders;

use App\Models\Location;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Location::create([
            'name' => 'Amman',
            'company_id' => 1,
        ]);
        Location::create([
            'name' => 'Irbid',
            'company_id' => 2,
        ]);
        Location::create([
            'name' => 'Irbid',
            'company_id' => 3,
        ]);
        Location::create([
            'name' => 'Zarqa',
            'company_id' => 4,
        ]);
        Location::create([
            'name' => 'Zarqa',
            'company_id' => 5,
        ]);
    }
}
