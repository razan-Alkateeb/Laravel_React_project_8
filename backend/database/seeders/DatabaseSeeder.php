<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Education;
use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\LanguageSeeder;
use Database\Seeders\UserLanguageSeeder;
use Database\Seeders\UserSkillSeeder;
use Database\Seeders\PostSeeder;
use Database\Seeders\CommentSeeder;
use Database\Seeders\IndustrySeeder;
use Database\Seeders\CompanySeeder;
use Database\Seeders\LocationSeeder;
use Database\Seeders\JobSeeder;
use Database\Seeders\ApplicationSeeder;
use Database\Seeders\QualificationSeeder;
use Database\Seeders\SkillSeeder;
use Database\Seeders\ResponsibleSeeder;
use Database\Seeders\AdminSeeder;
use Database\Seeders\EducationSeeder;
use Database\Seeders\ExperienceSeeder;
use Database\Seeders\DayOfWorkSeeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            LanguageSeeder::class,
            UserLanguageSeeder::class,
            UserSkillSeeder::class,
            PostSeeder::class,
            CommentSeeder::class,
            IndustrySeeder::class,
            CompanySeeder::class,
            LocationSeeder::class,
            JobSeeder::class,
            ApplicationSeeder::class,
            QualificationSeeder::class,
            SkillSeeder::class,
            ResponsibleSeeder::class,
            AdminSeeder::class,
            EducationSeeder::class,
            ExperienceSeeder::class,
            DayOfWorkSeeder::class,

        ]);
    }
}
