<?php

namespace App\Http\Controllers;
use App\Models\Industry;

use App\Models\Company;
use App\Models\Job;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function getAllCompanies()
    {
        // $companies = Company::all();
        // return response()->json($companies);

        $companies = Company::with('location', 'job')->get();
        return response()->json($companies);
    }


    public function getCompanyDetails($companyId)
    {
        $company = Company::with('dayOfWork')->find($companyId);

        if (!$company) {
            return response()->json(['message' => 'Company not found'], 404);
        }

        return response()->json($company);
    }


    public function getCompanyjobs($companyId)
    {
        $jobs = Company::with(['job.company.location',"dayOfWork"])->find($companyId);


        if (!$jobs) {
            return response()->json(['message' => 'Company not found'], 404);
        }

        return response()->json($jobs);
    }



    public function index()
    {
        $companies = Company::all();

        // Pass the users data to the view
        return view('dashboard.companies' ,  compact('companies'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $industries = Industry::pluck('id', 'id'); 
        return view('dashboard.createcompany', compact('industries'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the form data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:companies|max:255',
            'password' => 'required|string|min:6',
            'description' => 'required|string',
            'website' => 'required|string',
            'phone_number' => 'required|string|max:15',
            'location_map' => 'required|string',
            'industry_id' => 'required|integer',
            // Add more validation rules for other fields
        ]);

        // Create a new Company instance and fill it with the request data
        $company = new Company();
        $company->name = $request->input('name');
        $company->email = $request->input('email');
        $company->password = bcrypt($request->input('password')); // Hash the password
        $company->description = $request->input('description');
        $company->website = $request->input('website');
        $company->phone_number = $request->input('phone_number');
        $company->location_map = $request->input('location_map');
        $company->industry_id = $request->input('industry_id');

        // Save the company to the database
        $company->save();

        return redirect('companiesdash')->with('success', 'Company added successfully');
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    
    {
        $company = Company::find($id);
    
        if (!$company) {
            return redirect('companiesdash')->with('error', 'Company not found');
        }
    
        return view('dashboard.editcompany')->with('company', $company);
    }
    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'password' => 'nullable|string|min:6', // nullable because it's optional in update
            'description' => 'required|string',
            'website' => 'required|string',
            'phone_number' => 'required|string|max:15',
            'location_map' => 'required|string',
            'industry_id' => 'required|integer',
            // Add more validation rules for other fields
        ]);
    
        $company = Company::find($id);
    
        if (!$company) {
            return redirect('companiesdash')->with('error', 'Company not found');
        }
    
        // Update the company data
        $company->name = $request->input('name');
        $company->email = $request->input('email');
        $company->description = $request->input('description');
        $company->website = $request->input('website');
        $company->phone_number = $request->input('phone_number');
        $company->location_map = $request->input('location_map');
        $company->industry_id = $request->input('industry_id');
    
        // Update the password if it's provided in the request
        if ($request->has('password')) {
            $company->password = bcrypt($request->input('password'));
        }
    
        // Save the updated company data
        $company->save();
    
        return redirect('companiesdash')->with('success', 'Company updated successfully');
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        Company::find($id)->delete();
        Company::destroy($id);
        return redirect('companiesdash')->with('flash_message', 'Admin deleted successfully');
    }
}
