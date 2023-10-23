<?php

namespace App\Http\Controllers;

use App\Models\Industry;
use Illuminate\Http\Request;

class IndustryController extends Controller
{

    public function getAllIndustries()
    {
        $industries = Industry::with('company.job')->get();
        return response()->json($industries);

      
    }







    public function index()
    {
        $industries = Industry::all();

        // Pass the users data to the view
        return view('dashboard.industries' ,  compact('industries'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.createindustry');

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
            'name' => 'required',
          
        ]);
       
    
        $industry = [
        'name' => $request->name,
    
    ];
        Industry::create($industry);

        return redirect('industrydash')->with('success', 'Industry added successfully');
    }
 
    

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Industry  $industry
     * @return \Illuminate\Http\Response
     */
    public function show(Industry $industry)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Industry  $industry
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $industry = Industry::find($id);
    
        if (!$industry) {
            return redirect('industrydash')->with('error', 'industry not found');
        }
    
        return view('dashboard.editindustry')->with('industry', $industry);
    }
    
        
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Industry  $industry
     * @return \Illuminate\Http\Response
     */
        public function update(Request $request, $id)
    {
    $request->validate([
        'name' => 'required',
   
    ]);

    $industry = Industry::find($id);

    if (!$industry) {
        return redirect('industrydash')->with('error', 'industry not found');
    }

    $industry->name = $request->name;
   
    $industry->save();

    return redirect('industrydash')->with('success', 'industry updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Industry  $industry
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        Industry::find($id)->delete();
        Industry::destroy($id);
        return redirect('industrydash')->with('flash_message', 'Industry deleted successfully');
    }
}
