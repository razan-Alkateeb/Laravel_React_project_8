<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{

    public function getAllLocations()
    {

        $locations = Location::with('company.job')->get();
         return response()->json($locations);

    }


    public function index()
    {
        $locations = Location::all();

        // Pass the users data to the view
        return view('dashboard.location' ,  compact('locations'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.createlocation');

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
            'company_id' => 'required|integer',
            // Add more validation rules for other fields if necessary
        ]);
    
        // Create a new Language instance and set its attributes
        $location = new Location();
        $location->name = $request->input('name');
        $location->company_id = $request->input('company_id');
    
        // Save the language to the database
        $location->save();
    
        return redirect('locationdash')->with('success', 'location added successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function show(Location $location)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $location = Location::find($id);
    
        if (!$location) {
            return redirect('locationdash')->with('error', 'location not found');
        }
    
        return view('dashboard.editlocation')->with('location', $location);
    }
    
        

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
    $request->validate([
        'name' => 'required',
        'company_id' => 'required|integer',
   
    ]);

    $location = Location::find($id);

    if (!$location) {
        return redirect('languagedash')->with('error', 'industry not found');
    }

    $location->name = $request->name;
    $location->company_id = $request->company_id;

   
    $location->save();

    return redirect('locationdash')->with('success', 'location updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        
        Location::find($id)->delete();
        Location::destroy($id);
        return redirect('industrydash')->with('flash_message', 'location deleted successfully');
    }
}
