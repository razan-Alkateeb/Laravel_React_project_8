<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\IndustryController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\UserSkillController;
use App\Http\Controllers\UserLanguageController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\ResponsibleController;
use App\Http\Controllers\QualificationController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AdminLoginController;
use App\Http\Controllers\CountController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::get('/adminLogin', [AdminLoginController::class, 'adminLogin'])->name('adminLogin');
Route::post('/adminLoginPost', [AdminLoginController::class, 'adminLoginPost'])->name('adminLogin');
Route::get('/adminLogout', [AdminLoginController::class, 'adminLogout'])->name('adminLogout');

Route::post('/adminlogout', [AdminLoginController::class, 'adminLogout'])->name('adminlogout');

    Route::get('/homedash', [CountController::class, 'index'])->name('homedash')->middleware('isLogedin');
    Route::resource('/userdash', UserController::class)->middleware('isLogedin');
    Route::resource('/admindash', AdminController::class)->middleware('isLogedin');
    Route::resource('/companiesdash', CompanyController::class)->middleware('isLogedin');
    Route::resource('/industrydash', IndustryController::class)->middleware('isLogedin');
    Route::resource('/applicationdash', ApplicationController::class)->middleware('isLogedin');
    Route::resource('/jobdash', JobController::class)->middleware('isLogedin');
    Route::resource('/commentdash', CommentController::class)->middleware('isLogedin');
    Route::resource('/userskilldash', UserSkillController::class)->middleware('isLogedin');
    Route::resource('/userlanguagedash', UserLanguageController::class)->middleware('isLogedin');
    Route::resource('/skilldash', SkillController::class)->middleware('isLogedin');
    Route::resource('/responsibledash', ResponsibleController::class)->middleware('isLogedin');
    Route::resource('/qualificationdash', QualificationController::class)->middleware('isLogedin');
    Route::resource('/locationdash', LocationController::class)->middleware('isLogedin');
    Route::resource('/languagedash', LanguageController::class)->middleware('isLogedin');
    Route::resource('/postdash', PostController::class)->middleware('isLogedin');




// Admin Login Routes



require __DIR__.'/auth.php';


// Route::get('/users', [UserController::class, 'index']);

// Route::get('/user1', [UserController::class, 'get']);
