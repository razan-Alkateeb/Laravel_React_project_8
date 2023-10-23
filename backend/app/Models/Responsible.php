<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Responsible extends Model
{
    use HasFactory;

    protected $fillable = ['job_id', 'responsibilitie_name'];

    public function job()
    {
        return $this->belongsTo(Job::class );
    }
}
