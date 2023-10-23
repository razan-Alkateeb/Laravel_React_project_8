<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Company::create([

            'name' => 'Apple',
            'address' => 'Amman',
            // 'website'=>'www.CompanyA.com',
            'email' => 'Apple@example.com',
            'password' => '123456789',
            'description' => 'Description of Company A',
            'website' => 'https://www.google.com',
            'phone_number' => '123-456-7890',
            'location_map' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867750.3173800122!2d36.50808486756517!3d31.83453195876325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2z2LnZhdmR2KfZhg!5e0!3m2!1sar!2sjo!4v1697672475989!5m2!1sar!2sjo',
            'industry_id' => 1,
            'img1' => "apple.png",
            'img2' => "apple.png",
            'img3' => "apple.png",
            'about' => "Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an",
            'startDate' => "2022-2-8"
        ]);

        Company::create([

            'name' => 'Aspire',
            'address' => 'Amman',

            'email' => 'Aspire@example.com',
            'password' => '123456789',
            'description' => 'Description of Company B',
            'website' => 'https://www.google.com',
            'phone_number' => '987-654-3210',
            'location_map' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867750.3173800122!2d36.50808486756517!3d31.83453195876325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2z2LnZhdmR2KfZhg!5e0!3m2!1sar!2sjo!4v1697672475989!5m2!1sar!2sjo',
            'industry_id' => 1,
            'img1' => "aspire.png",
            'img2' => "aspire.png",
            'img3' => "aspire.png",
            'about' => "Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an",
            'startDate' => "2020-10-5"

        ]);

        Company::create([

            'name' => 'Archer',
            'address' => 'Irbid',

            'email' => 'Archer@example.com',
            'password' => '123456789',
            'description' => 'Description of Company B',
            'website' => 'https://www.google.com',
            'phone_number' => '987-654-3210',
            'location_map' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867750.3173800122!2d36.50808486756517!3d31.83453195876325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2z2LnZhdmR2KfZhg!5e0!3m2!1sar!2sjo!4v1697672475989!5m2!1sar!2sjo',
            'industry_id' => 2,
            'img1' => "archer.png",
            'img2' => "archer.png",
            'img3' => "archer.png",
            'about' => "Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an",
            'startDate' => "2020-10-5"

        ]);

        Company::create([

            'name' => 'Be Smart',
            'address' => 'Zarqa',

            'email' => 'Be_Smart@example.com',
            'password' => '123456789',
            'description' => 'Description of Company B',
            'website' => 'https://www.google.com',
            'phone_number' => '987-654-3210',
            'location_map' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867750.3173800122!2d36.50808486756517!3d31.83453195876325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2z2LnZhdmR2KfZhg!5e0!3m2!1sar!2sjo!4v1697672475989!5m2!1sar!2sjo',
            'industry_id' => 3,
            'img1' => "be_smart.png",
            'img2' => "be_smart.png",
            'img3' => "be_smart.png",
            'about' => "Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an",
            'startDate' => "2020-10-5"

        ]);
        Company::create([

            'name' => 'Line',
            'address' => 'Irbid',

            'email' => 'Line@example.com',
            'password' => '123456789',
            'description' => 'Description of Company B',
            'website' => 'https://www.google.com',
            'phone_number' => '987-654-3210',
            'location_map' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867750.3173800122!2d36.50808486756517!3d31.83453195876325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2z2LnZhdmR2KfZhg!5e0!3m2!1sar!2sjo!4v1697672475989!5m2!1sar!2sjo',
            'industry_id' => 4,
            'img1' => "line.png",
            'img2' => "line.png",
            'img3' => "line.png",
            'about' => "Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an",
            'startDate' => "2020-10-5"

        ]);
    }
}
