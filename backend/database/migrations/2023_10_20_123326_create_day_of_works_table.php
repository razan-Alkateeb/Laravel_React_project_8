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
        Schema::create('day_of_works', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('company_id')->unsigned();
        $table->boolean('Sunday')->default(1);
        $table->boolean('Monday')->default(1);
        $table->boolean('Tuesday')->default(1);
        $table->boolean('Wednesday')->default(1);
        $table->boolean('Thursday')->default(1);
        $table->boolean('Friday')->default(0);
        $table->boolean('Saturday')->default(0);
        $table->string('From')->default('9:00');
        $table->string('To')->default('6:00');
        $table->timestamps();

        $table->foreign('company_id')->references('id')->on('companies');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('day_of_works');
    }
};
