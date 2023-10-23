<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;

use DB;
use illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Session\Session;

use Illuminate\Support\Facades\Hash;




class adminLoginController extends Controller
{
    public function adminLogin()
    {
        return view('dashboard.login');
    }


    public function adminLoginPost(Request $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];
    
        $admin = DB::table('admins')
            ->where('email', $credentials['email'])
            ->first();
    
        if ($admin) {
            if (Hash::check($credentials['password'], $admin->password)) {
                session()->put('loginname', $admin->name);
                session()->put('loginimage', $admin->image); // Assuming 'image' is the column name for the image path
                return redirect()->route('homedash')->with('success', 'Login Successfully');
            } else {
                return back()->with('error', 'Email or Password is invalid');
            }
        } else {
            return back()->with('error', 'Email or Password is invalid');
        }
    }
    

    


    public function adminLogout()
    {

        if (session()->has('loginname')) {
            session()->pull('loginname');
            return redirect('adminLogin');
        }
    }
}
