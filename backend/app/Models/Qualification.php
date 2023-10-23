<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Qualification extends Model
{
    use HasFactory;

    protected $fillable = ['job_id' , 'qualification_name'];

    public function job()
    {
        return $this->belongsTo(Job::class );
    }
}
