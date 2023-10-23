<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'password',
        'description',
        'website',
        'phone_number',
        'location_map',
        'industry_id',
        'works_day_id',
        'image',
    ];

    public function industry()
    {
        return $this->belongsTo(Industry::class );
    }

    public function location()
    {
        return $this->hasMany(Location::class);
    }
    public function job()
    {
        return $this->hasMany(Job::class);
    }
    public function dayOfWork()
    {
        return $this->hasOne(DayOfWork::class);
    }
}
