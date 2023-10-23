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
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('about')->nullable();
            $table->string('img1')->default('company.jpg');
            $table->string('img2')->default('company.jpg');
            $table->string('img3')->default('company.jpg');
            $table->string('address');
            // $table->string('website');
            $table->dateTime('startDate');
            $table->string('Linkedin')->nullable();
            $table->string('Whatsap')->nullable();
            $table->string('Facebook')->nullable();
            $table->string('Employees')->nullable();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('description');
            $table->string('website');
            $table->string('phone_number');
            $table->text('location_map')->nullable();
            $table->string('image')->default('company.jpg');

            $table->bigInteger('industry_id')->unsigned();



            $table->foreign('industry_id')->references('id')->on('industries');

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
        Schema::dropIfExists('companies');
    }
};
