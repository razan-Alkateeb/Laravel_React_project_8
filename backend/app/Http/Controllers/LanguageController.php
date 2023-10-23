<?php

namespace App\Http\Controllers;

use App\Models\Language;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $languages = Language::all();

        // Pass the users data to the view
        return view('dashboard.language' ,  compact('languages'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.createlanguage');

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            // Add more validation rules for other fields if necessary
        ]);
    
        // Create a new Language instance and set its attributes
        $language = new Language();
        $language->name = $request->input('name');
        // Set other attributes if necessary
    
        // Save the language to the database
        $language->save();
    
        return redirect('languagedash')->with('success', 'language added successfully');
    }
  
    public function show(Language $language)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Language  $language
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $language = Language::find($id);
    
        if (!$language) {
            return redirect('languagedash')->with('error', 'language not found');
        }
    
        return view('dashboard.editlanguage')->with('language', $language);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Language  $language
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
    $request->validate([
        'name' => 'required',
   
    ]);

    $language = Language::find($id);

    if (!$language) {
        return redirect('languagedash')->with('error', 'industry not found');
    }

    $language->name = $request->name;
   
    $language->save();

    return redirect('languagedash')->with('success', 'Language updated successfully');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Language  $language
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        
        Language::find($id)->delete();
        Language::destroy($id);
        return redirect('languagedash')->with('flash_message', 'language deleted successfully');
    }
}
