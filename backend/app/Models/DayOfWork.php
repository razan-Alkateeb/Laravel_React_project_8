<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DayOfWork extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'From',
        'To',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class ,'works_day_id');
    }



}
