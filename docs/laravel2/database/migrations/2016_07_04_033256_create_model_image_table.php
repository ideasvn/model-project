<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateModelImageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('model_image', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('image')->unique();
            $table->integer('model_id')->unsigned();
            $table->foreign('model_id')->references('id')->on('model_nude')->onDelete('cascade');
            $table->timestamp('created_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('model_image');
        //
    }
}
