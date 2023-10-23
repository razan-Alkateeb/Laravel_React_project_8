@extends('dashlayouts.master')

@section('title')
    Edit Job
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Jobs
@endsection

@section('content')
<div class="admin-container">
    <h2>Edit Job</h2>
    <form action="{{ url('jobdash/' . $job->id) }}" method="POST" enctype="multipart/form-data" class="admin-form">
        @csrf
        @method('PUT')

        <div class="admin-form-group">
            <label class="admin-label" for="title">Title:</label>
            <input class="admin-input" type="text" id="title" name="title" value="{{ $job->title }}" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="description">Description:</label>
            <textarea class="admin-input" id="description" name="description" rows="4" required>{{ $job->description }}</textarea>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="salary">Salary:</label>
            <input class="admin-input" type="text" id="salary" name="salary" value="{{ $job->salary }}" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="deadline_date">Deadline Date:</label>
            <input class="admin-input" type="date" id="deadline_date" name="deadline_date" value="{{ $job->deadline_date }}" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="professional_level">Professional Level:</label>
            <input class="admin-input" type="text" id="professional_level" name="professional_level" value="{{ $job->professional_level }}" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="location_type">Location Type:</label>
            <input class="admin-input" type="text" id="location_type" name="location_type" value="{{ $job->location_type }}" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="employment_type">Employment Type:</label>
            <input class="admin-input" type="text" id="employment_type" name="employment_type" value="{{ $job->employment_type }}" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="company_id">Company ID:</label>
            <input class="admin-input" type="text" id="company_id" name="company_id" value="{{ $job->company_id }}" required>
        </div>

        <div class="admin-form-group">
            <input class="admin-submit" type="submit" value="Update Job">
        </div>
    </form>
</div>
@endsection
