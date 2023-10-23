<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Admin;
use App\Models\Company;
use App\Models\Job;

class CountController extends Controller
{
    public function index()
    {
        $companies = Company::all();
        $users = User::all();
        $admins = Admin::all();
        $jobs = Job::all();

        return view('dashboard.home', compact('users', 'companies', 'jobs', 'admins' ));
    }
}
