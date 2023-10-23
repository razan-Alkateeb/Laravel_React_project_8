@extends('dashlayouts.master')

@section('title')
    Edit Admin
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Admins
@endsection

@section('content')
<div class="admin-container">
    <h2>Edit Admin</h2>
    <form action="{{ url('admindash/' . $admin->id) }}" method="POST" enctype="multipart/form-data" class="admin-form">
        @csrf
        @method('PUT')
    
        <div class="admin-form-group">
            <label class="admin-label" for="name">Name:</label>
            <input class="admin-input" type="text" id="name" name="name" value="{{ $admin->name }}" required>
        </div>
    
        <div class="admin-form-group">
            <label class="admin-label" for="email">Email:</label>
            <input class="admin-input" type="email" id="email" name="email" value="{{ $admin->email }}" required>
        </div>
    
        <div class="admin-form-group">
            <label class="admin-label" for="password">Password:</label>
            <input class="admin-input" type="password" id="password" name="password" placeholder="Enter new password if you want to change it">
        </div>
    
        <div class="admin-form-group">
            <label class="admin-label" for="phone">Phone:</label>
            <input class="admin-input" type="text" id="phone" name="phone" value="{{ $admin->phone }}" required>
        </div>
    
        <div class="admin-form-group">
            <label for="image">Upload New Image:</label>
            <input type="file" id="image" name="image" accept="image/*" width="100" height="100">
        </div>
    
        <div class="admin-form-group">
            <label>Current Image:</label>
            <img src="{{ asset($admin->image) }}" alt="Admin Image" width="100">
        </div>
    
        <div class="admin-form-group">
            <input class="admin-submit" type="submit" value="Update Admin">
        </div>
    </form>
    
</div>
@endsection
