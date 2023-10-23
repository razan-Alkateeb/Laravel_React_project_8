<?php

namespace App\Http\Controllers;

use App\Models\UserLanguage;
use Illuminate\Http\Request;

class UserLanguageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userlanguages = UserLanguage::all();

        // Pass the users data to the view
        return view('dashboard.userlanguage' ,  compact('userlanguages'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserLanguage  $userLanguage
     * @return \Illuminate\Http\Response
     */
    public function show(UserLanguage $userLanguage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserLanguage  $userLanguage
     * @return \Illuminate\Http\Response
     */
    public function edit(UserLanguage $userLanguage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserLanguage  $userLanguage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserLanguage $userLanguage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserLanguage  $userLanguage
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        UserLanguage::find($id)->delete();
        UserLanguage::destroy($id);
        return redirect('userlanguagedash')->with('flash_message', 'UserLanguage deleted successfully');
    }
}
