<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $applications = application::all();

        // Pass the users data to the view
        return view('dashboard.application' ,  compact('applications'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.createapplication');


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
            'message' => 'required|string|max:255',
        ]);
        Application::create([
            'user_id' => $request->userId, // Replace 'field1' with your actual field name and 'value1' with the value you want to insert.
            'job_id' => $request->jobId,
            'status' => "pending",
            'message' => $request->message,

        ]);



    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function show(Application $application)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Application  $application
     * @return \Illuminate\Http\Response
     */
  
        public function edit($id)
{
    $application = Application::find($id);

    if (!$application) {
        return redirect('application')->with('error', 'Application not found');
    }

    return view('dashboard.editapplication')->with('application', $application);
}

    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'user_id' => 'required',
            'job_id' => 'required',
            'status' => 'required',
        ]);
    
        $application = Application::find($id);
    
        if (!$application) {
            return redirect('application')->with('error', 'Application not found');
        }
    
        // Update the application data
        $application->user_id = $request->user_id;
        $application->job_id = $request->job_id;
        $application->status = $request->status;
    
        // Save the updated application data
        $application->save();
    
        return redirect('applicationdash')->with('success', 'Application updated successfully');
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Application::find($id)->delete();
        Application::destroy($id);
        return redirect('applicationdash')->with('flash_message', 'Admin deleted successfully');
    }
}
