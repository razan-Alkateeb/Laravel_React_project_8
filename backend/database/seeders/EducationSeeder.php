<?php



namespace Database\Seeders;
use App\Models\Education;


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EducationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Education::create([

            'subject' => 'Software Engineer',
            'schoole'=>'yarmouk_university',
            'description' => 'Develop software applications',
            'from' => '2022-12-31',
            'to' => '2023-12-31',
            
            'user_id' => 1,
        ]);
        Education::create([

            'subject' => 'Computer Information System',
            'description' => 'Develop software applications',
            'from' => '2022-12-31',
            'to' => '2023-12-31',
            
            'user_id' => 1,
        ]);
    }
    
}
