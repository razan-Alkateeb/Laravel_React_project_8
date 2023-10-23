<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    public function handle($request, Closure $next)
    {
        // Check if the user is authenticated
        if (!Auth::guard('admin')->check()) {
            // If not authenticated, redirect to the admin login page
            return redirect()->route('admin.login')->withErrors(['email' => 'You must log in first']);
        }

        return $next($request);
    }
}
