<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\IndustryController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ApplicationController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('jobs',[JobController::class,'index']);
Route::get('companies',[CompanyController::class, 'getAllCompanies']);

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware(['web', 'guest'])
    ->name('login');


Route::get('/get-csrf-token', function () {
    return response()->json(['token' => csrf_token()]);
});

Route::post('/register', [RegisteredUserController::class, 'store'])
    ->middleware('guest')
    ->name('register');

Route::get('/user', [AuthenticatedSessionController::class, 'user'])
    ->middleware('auth')
    ->name('logout');


//all industries with company and job
Route::get('/industries', [IndustryController::class, 'getAllIndustries']);
Route::get('/users', [UserController::class, 'allUsers']);
Route::post('/image', [UserController::class, 'updateInformation']);
Route::post('/about', [UserController::class, 'updateAbout']);
Route::post('/language', [UserController::class, 'addLanguage']);
Route::get('/users/{id}', [UserController::class, 'best']);

//all jobs with company and location
Route::get('/jobs', [JobController::class, 'getAllJobs']);

//all locations with company and job
Route::get('/locations', [LocationController::class, 'getAllLocations']);

//all posts with users
Route::get('/posts', [PostController::class, 'getAllPosts']);
Route::post('/posts', [PostController::class, 'create']);
Route::delete('/posts/{id}', [PostController::class, 'delete']);
Route::put('/posts/{id}', [PostController::class, 'update']);
Route::post('/skills', [UserController::class, 'addSkills']);

//user userPosts
Route::get('/userPosts/{id}', [PostController::class, 'getUserPosts']);

//all Companies
// Route::get('/companies', [CompanyController::class, 'getAllCompanies']);




Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
->middleware('auth')
->name('logout');

Route::get('/jobdetails/{id}', [JobController::class, 'show']);
Route::get('/samejob/{id}', [JobController::class, 'sameJobs']);



 Route::get('/user1', [UserController::class, 'get']);
 Route::post('/apply', [ApplicationController::class, 'store']);

Route::get('/userlanguage/{userId}', [UserController::class, 'getLanguagesForUser']);
Route::delete('/language/{user_id}/{id}', [UserController::class, 'deleteLanguage']);
Route::delete('/skills/{id}', [UserController::class, 'deleteSkills']);


Route::get('/userskills/{userId}', [UserController::class, 'getUserSkills']);

Route::get('/userexperience/{userId}', [UserController::class, 'getUserExperience']);
Route::get('/userseducation/{userId}', [UserController::class, 'getUserEducations']);

//----------------------
Route::get('/companyWithWorkingDays/{companyId}', [CompanyController::class, 'getCompanyDetails']);
Route::get('/companyjobs/{companyId}', [CompanyController::class, 'getCompanyjobs']);



Route::get('/post/{Id}', [PostController::class, 'show']);
Route::post('/comment', [PostController::class, 'comment']);
Route::delete('/deletecomment/{id}', [CommentController::class, 'delete']);
