<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'salary',
        'deadline_date',
        'professional_level',
        'location_type',
        'employment_type',
        'company_id',
    ];

    public function application()
    {
        return $this->hasMany(Application::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class );
    }

    public function qualification()
    {
        return $this->hasMany(Qualification::class);
    }
    public function skill()
    {
        return $this->hasMany(Skill::class);
    }
    public function responsible()
    {
        return $this->hasMany(Responsible::class);
    }
}
