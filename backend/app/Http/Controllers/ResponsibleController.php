<?php

namespace App\Http\Controllers;

use App\Models\Responsible;
use Illuminate\Http\Request;

class ResponsibleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $responsibilities = Responsible::all();

        // Pass the users data to the view
        return view('dashboard.responsible' ,  compact('responsibilities'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.createresponsible');

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
            'responsibilitie_name' => 'required|string|max:255',
            'job_id' => 'required|integer', // Add validation for job_id if applicable
            // other validation rules
        ]);
    
        Responsible::create([
            'responsibilitie_name' => $request->responsibilitie_name,
            'job_id' => $request->job_id, // Assuming job_id is part of your form data
            // other fields
        ]);
    
        return redirect('responsibledash')->with('success', 'Responsibility added successfully');
    }
    

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Responsible  $responsible
     * @return \Illuminate\Http\Response
     */
    public function show(Responsible $responsible)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Responsible  $responsible
     * @return \Illuminate\Http\Response
     */
    public function edit( $id)
    {
        $responsible = Responsible::find($id);
    
        if (!$responsible) {
            return redirect('responsibledash')->with('error', 'responsible not found');
        }
    
        return view('dashboard.editresponsible')->with('responsible', $responsible);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Responsible  $responsible
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'job_id' => 'required|string|max:255',
            'responsibilitie_name' => 'required|string|max:255',
            // Add more validation rules for other fields if necessary
        ]);
    
        $responsible = Responsible::find($id);
    
        if (!$responsible) {
            return redirect('responsibledash')->with('error', 'Responsible not found');
        }
    
        $responsible->job_id = $request->job_id;
        $responsible->responsibilitie_name = $request->responsibilitie_name;
        // Update other fields similarly if needed
    
        $responsible->save();
    
        return redirect('responsibledash')->with('success', 'Responsible updated successfully');
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Responsible  $responsible
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        Responsible::find($id)->delete();
        Responsible::destroy($id);
        return redirect('responsibledash')->with('flash_message', 'Responsible deleted successfully');
    }
}
