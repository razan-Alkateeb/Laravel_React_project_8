<?php

namespace App\Http\Controllers;
use App\Models\Job;
use App\Models\Qualification;
use Illuminate\Http\Request;

class QualificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $qualifications = Qualification::all();

        // Pass the users data to the view
        return view('dashboard.qualification' ,  compact('qualifications'));
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $jobs = Job::pluck('id', 'id'); // Assuming 'id' is the job ID field in your database
        return view('dashboard.createqualification', compact('jobs'));
      

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
            'job_id' => 'required|string|max:255',
            'qualification_name' => 'required|string|max:255',
        ]);
    
        Qualification::create([
            'job_id' => $request->job_id,
            'qualification_name' => $request->qualification_name,
        ]);
    
        return redirect('qualificationdash')->with('success', 'Qualification added successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Qualification  $qualification
     * @return \Illuminate\Http\Response
     */
    public function show(Qualification $qualification)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Qualification  $qualification
     * @return \Illuminate\Http\Response
     */
    public function edit( $id)
    {
        $qualification = Qualification::find($id);
    
        if (!$qualification) {
            return redirect('qualificationdash')->with('error', 'qualification not found');
        }
    
        return view('dashboard.editqualification')->with('qualification', $qualification);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Qualification  $qualification
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'job_id' => 'required|string|max:255',
            'qualification_name' => 'required|string|max:255',
            // Add more validation rules for other fields if necessary
        ]);
    
        $qualification = Qualification::find($id);
    
        if (!$qualification) {
            return redirect('qualificationdash')->with('error', 'Qualification not found');
        }
    
        $qualification->job_id = $request->job_id;
        $qualification->qualification_name = $request->qualification_name;
        // Update other fields similarly if needed
    
        $qualification->save();
    
        return redirect('qualificationdash')->with('success', 'Qualification updated successfully');
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Qualification  $qualification
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        Qualification::find($id)->delete();
        Qualification::destroy($id);
        return redirect('qualificationdash')->with('flash_message', 'Qualification deleted successfully');
    }
}
