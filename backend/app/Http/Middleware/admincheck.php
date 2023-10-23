<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class adminCheck
{
    public function handle(Request $request, Closure $next)
    {
        if(!session()->has('loginname'))
        {
            return redirect('adminLogin')->with('error', 'You must login first');
        }

       
        return $next($request);
    }
    }


