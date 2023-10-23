<?php

namespace App\Http\Controllers;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $admins = Admin::all();

        return view('dashboard.admin' ,  compact('admins'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.createadmin');


    }

  
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'phone' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,jfif|max:2048',
        ]);
       
        $filename = '';
        if ($request->hasFile('image')) {
            $filename = $request->getSchemeAndHttpHost() . '/assets/img/' . time() . '.' . $request->image->extension();
            $request->image->move(public_path('/assets/img/'), $filename);
        }
        // Create a new Admin instance and fill it with the request data
        $admin = [
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'phone' => $request->phone,
        'image' => $filename,
    ];
        // Save the admin to the database
        Admin::create($admin);

        return redirect('admindash')->with('success', 'Admin added successfully');
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function show(Admin $admin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
 
        public function edit($id)
{
    $admin = Admin::find($id);

    if (!$admin) {
        return redirect('admindash')->with('error', 'Admin not found');
    }

    return view('dashboard.editadmin')->with('admin', $admin);
}

    

     
public function update(Request $request, $id)
{
    $request->validate([
        'name' => 'required',
        'email' => 'required',
        'phone' => 'required',
        'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,jfif|max:2048',
    ]);

    $admin = Admin::find($id);

    if (!$admin) {
        return redirect('admindash')->with('error', 'Admin not found');
    }

    // Delete old image if it exists
    if ($admin->image && file_exists(public_path($admin->image))) {
        unlink(public_path($admin->image));
    }

    // Update the admin data
    $admin->name = $request->name;
    $admin->email = $request->email;
    $admin->phone = $request->phone;

    // Handle image update if a new image is uploaded
    if ($request->hasFile('image')) {
        $filename = $request->getSchemeAndHttpHost() . '/assets/img/' . time() . '.' . $request->image->extension();
        $request->image->move(public_path('/assets/img/'), $filename);
        $admin->image = $filename;
    }

    // Save the updated admin data
    $admin->save();

    return redirect('admindash')->with('success', 'Admin updated successfully');
}

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin  
     * @return \Illuminate\Http\Response
     */
  
    public function destroy($id)
    {
        Admin::find($id)->delete();
        Admin::destroy($id);
        return redirect('admindash')->with('flash_message', 'Admin deleted successfully');
    }
}
