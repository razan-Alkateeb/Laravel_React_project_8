<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {

            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('about')->nullable();

            $table->string('gender')->nullable();
            $table->string('address')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('linkedin_link')->nullable();
            $table->mediumText('image')->default('profile.png');


            $table->string('academic_specialization')->nullable();
            $table->string('academic_level')->nullable();
            $table->string('professional_level')->nullable();
            $table->string('career_field')->nullable();
            $table->string('jop_title')->nullable();
            $table->bigInteger('years_of_experience')->nullable();
            $table->string('cv')->nullable();
            $table->string('subscription')->default('Basic');
            $table->boolean('role')->default('0');
            $table->rememberToken();
            $table->timestamps();


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
