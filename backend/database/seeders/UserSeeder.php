<?php

namespace Database\Seeders;
use App\Models\User;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'John Doe',
            'email' => 'johndoe@example.com',
            'password' => '123456789',
            'about' => "Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an ",
            'gender' => 'Male',
            'address' => 'Amman',
            'phone_number' => '123-456-7890',
            'linkedin_link' => 'https://www.linkedin.com/in/johndoe',
            'academic_specialization' => 'Computer Science',
            'academic_level' => 'Bachelor',
            'professional_level' => 'Entry Level',
            'career_field' => 'Web Development',
            'jop_title' => 'Web Developer',
            'years_of_experience' => 5,
            'subscription' => 'Basic','image' => 'profile.png'

        ]);

        User::create([
            'name' => 'Jane Smith',
            'email' => 'janesmith@example.com',
            'password' => '123456789',
            'about' => "Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an ",

            'gender' => 'Female',
            'address' => '456 Elm St',
            'phone_number' => '987-654-3210',
            'linkedin_link' => 'https://www.linkedin.com/in/janesmith',
            'academic_specialization' => 'Marketing',
            'academic_level' => 'Master',
            'professional_level' => 'Junior',
            'career_field' => 'Marketing',
            'jop_title' => 'Marketing Specialist',
            'years_of_experience' => 3,
            'subscription' => 'Premium',
            'image' => 'profile.png'
        ]);
    }
}
