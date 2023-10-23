<?php

namespace App\Http\Controllers;
use App\Models\Company;
use App\Models\Job;
use App\Models\industry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class JobController extends Controller
{
    public function getAllJobs()
    {

        $jobs = Job::with('company.location')->get();
         return response()->json($jobs);




// // You can also further filter the query if needed, for instance, with a specific location.
// $jobsInSpecificLocation = Job::with('company.location')
//     ->whereHas('company.location', function ($query) use ($specificLocationId) {
//         $query->where('id', $specificLocationId);
//     })
//     ->get();


    }



    public function index()
    {
        $jobs = Job::all();

        // Pass the users data to the view
        return view('dashboard.job' ,  compact('jobs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
  
        public function create()
        {
            $companies = Company::pluck('name', 'id'); // Assuming 'name' is the company name field in your database
            return view('dashboard.createjob', compact('companies'));
        }
        
    


    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'salary' => 'required|string|max:255',
            'deadline_date' => 'required|date',
            'professional_level' => 'required|string|max:255',
            'location_type' => 'required|string|max:255',
            'employment_type' => 'required|string|max:255',
            'company_id' => 'required|integer',
            // Add more validation rules for other fields if necessary
        ]);
    
        // Create a new Job instance and fill it with the request data
        $job = new Job();
        $job->title = $request->input('title');
        $job->description = $request->input('description');
        $job->salary = $request->input('salary');
        $job->deadline_date = $request->input('deadline_date');
        $job->professional_level = $request->input('professional_level');
        $job->location_type = $request->input('location_type');
        $job->employment_type = $request->input('employment_type');
        $job->company_id = $request->input('company_id');
    
        // Save the job to the database
        $job->save();
    
        return redirect('jobdash')->with('success', 'Job created successfully');
    }
    

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $job = Job::with(['application', 'company.location','company.industry' ,'qualification', 'skill', 'responsible'])
    ->find($id);
        return response()->json($job);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function edit( $id)
    {
        $job = Job::find($id);
    
        if (!$job) {
            return redirect('jobdash')->with('error', 'job not found');
        }
    
        return view('dashboard.editjob')->with('job', $job);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'salary' => 'required|string|max:255',
            'deadline_date' => 'required|date',
            'professional_level' => 'required|string|max:255',
            'location_type' => 'required|string|max:255',
            'employment_type' => 'required|string|max:255',
            'company_id' => 'required|integer',
            // Add more validation rules for other fields if necessary
        ]);
    
        $job = Job::find($id);
    
        if (!$job) {
            return redirect('jobdash')->with('error', 'Job not found');
        }
    
        $job->title = $request->title;
        $job->description = $request->description;
        $job->salary = $request->salary;
        $job->deadline_date = $request->deadline_date;
        $job->professional_level = $request->professional_level;
        $job->location_type = $request->location_type;
        $job->employment_type = $request->employment_type;
        $job->company_id = $request->company_id;
    
        $job->save();
    
        return redirect('jobdash')->with('success', 'Job updated successfully');
    }
    
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Job::find($id)->delete();
        Job::destroy($id);
        return redirect('jobdash')->with('flash_message', 'job deleted successfully');
    }


    public function sameJobs($id)
    {
        $industryId = $id; // Replace 1 with the actual ID of the industry you want to retrieve jobs for

        $industry = Industry::with(['company.job']) // Eager load companies and their jobs
            ->find($industryId);

        if ($industry) {
            $jobs = optional($industry->company)->flatMap(function ($company) {
                if ($company && $company->job) { // Use the singular form "job"
                    return $company->job->take(3)->map(function ($job) use ($company) {
                        // Include related data (e.g., company and additional data inside company)
                        $jobData = [
                            'id' => $job->id,
                            'title' => $job->title,
                            'company' => $job->company,
                            'location' => $job->company->location,
                            'industry' => $job->company->industry,
                            'salary' => $job->salary,
                            'deadline_date' => $job->deadline_date,
                            'location_type' => $job->location_type,
                            'professional_level' => $job->professional_level,
                        ];

                        return $jobData;
                    });
                }
                return [];
            });

            return response()->json($jobs);
        }
        return response()->json(['message' => 'Industry not found'], 404);
    }

}
