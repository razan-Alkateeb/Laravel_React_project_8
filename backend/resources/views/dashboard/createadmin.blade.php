@extends('dashlayouts.master')

@section('title')
    Table
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    admins
@endsection

@section('content')


<div class="admin-container">
    <h2>Add Admin</h2>
    <form class="admin-form" method="POST" action="{{ route('admindash.store') }}"  enctype="multipart/form-data">
        @csrf 

        <div class="admin-form-group">
            <label class="admin-label" for="name">Name:</label>
            <input class="admin-input" type="text" id="name" name="name" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="email">Email:</label>
            <input class="admin-input" type="email" id="email" name="email" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="password">Password:</label>
            <input class="admin-input" type="password" id="password" name="password" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="phone">Phone:</label>
            <input class="admin-input" type="text" id="phone" name="phone" required>
        </div>
        <label for="image">Upload Image:</label>
        <input type="file" id="image" name="image" accept="image/*" width="100" height="100"><br>

        <div class="admin-form-group">
            <input class="admin-submit" type="submit" value="Add Admin">
        </div>
    </form>
</div>


@endsection
