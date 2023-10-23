@extends('dashlayouts.master')

@section('title')
    Edit Company
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Companies
@endsection

@section('content')
<div class="admin-container">
    <h2>Edit Company</h2>
    <form action="{{ url('companiesdash/' . $company->id) }}" method="POST" enctype="multipart/form-data" class="admin-form">
        @csrf
        @method('PUT')

        <div class="admin-form-group">
            <label class="admin-label" for="name">Company Name:</label>
            <input class="admin-input" type="text" id="name" name="name" value="{{ $company->name }}" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="email">Email:</label>
            <input class="admin-input" type="email" id="email" name="email" value="{{ $company->email }}" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="password">Password:</label>
            <input class="admin-input" type="password" id="password" name="password" placeholder="Enter new password if you want to change it">
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="description">Description:</label>
            <textarea class="admin-input" id="description" name="description" rows="4" required>{{ $company->description }}</textarea>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="website">Website:</label>
            <input class="admin-input" type="text" id="website" name="website" value="{{ $company->website }}" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="phone_number">Phone Number:</label>
            <input class="admin-input" type="text" id="phone_number" name="phone_number" value="{{ $company->phone_number }}" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="location_map">Location Map:</label>
            <input class="admin-input" type="text" id="location_map" name="location_map" value="{{ $company->location_map }}" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="industry_id">Industry ID:</label>
            <input class="admin-input" type="text" id="industry_id" name="industry_id" value="{{ $company->industry_id }}" required>
        </div>

        <div class="admin-form-group">
            <input class="admin-submit" type="submit" value="Update Company">
        </div>
    </form>
</div>
@endsection
