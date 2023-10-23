<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $skills = Skill::all();

        // Pass the users data to the view
        return view('dashboard.skill' ,  compact('skills'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.createskill');

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
            'skill_name' => 'required|string|max:255',
            // Add more validation rules for other fields if necessary
        ]);

        Skill::create([
            'job_id' => $request->job_id,
            'skill_name' => $request->skill_name,
            // Add more fields if necessary
        ]);

        return redirect('skilldash')->with('success', 'Skill added successfully');
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function show(Skill $skill)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $skill = Skill::find($id);
    
        if (!$skill) {
            return redirect('skilldash')->with('error', 'Skill not found');
        }
    
        return view('dashboard.editskill')->with('skill', $skill);
    }
    
    public function update(Request $request, $id)
    {
        $request->validate([
            'job_id' => 'required|string|max:255',
            'skill_name' => 'required|string|max:255',
            // Add more validation rules for other fields if necessary
        ]);
    
        $skill = Skill::find($id);
    
        if (!$skill) {
            return redirect('skilldash')->with('error', 'Skill not found');
        }
    
        $skill->job_id = $request->job_id;
        $skill->skill_name = $request->skill_name;
        // Update other fields similarly if needed
    
        $skill->save();
    
        return redirect('skilldash')->with('success', 'Skill updated successfully');
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        Skill::find($id)->delete();
        Skill::destroy($id);
        return redirect('skilldash')->with('flash_message', 'skill deleted successfully');
    }
}
