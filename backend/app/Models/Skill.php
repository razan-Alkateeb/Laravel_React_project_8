<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = ['job_id', 'skill_name'];

    public function job()
    {
        return $this->belongsTo(Job::class );
    }
}
