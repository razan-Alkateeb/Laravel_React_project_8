@extends('dashlayouts.master')

@section('title')
    Create Job
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Jobs
@endsection

@section('content')
<div class="admin-container">
    <h2>Create Job</h2>
    <form class="admin-form" method="POST" action="{{ route('jobdash.store') }}">
        @csrf

        <div class="admin-form-group">
            <label class="admin-label" for="title">Title:</label>
            <input class="admin-input" type="text" id="title" name="title" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="description">Description:</label>
            <textarea class="admin-input" id="description" name="description" rows="4" required></textarea>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="salary">Salary:</label>
            <input class="admin-input" type="text" id="salary" name="salary" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="deadline_date">Deadline Date:</label>
            <input class="admin-input" type="date" id="deadline_date" name="deadline_date" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="professional_level">Professional Level:</label>
            <select class="admin-input" id="professional_level" name="professional_level" required>
                <option value="Entry Level">Entry Level</option>
                <option value="Junior">Junior</option>
                <option value="Mid-Senior Level">Mid-Senior Level</option>
                <option value="Senior">Senior</option>
            </select>
        </div>
        

        <div class="admin-form-group">
            <label class="admin-label" for="location_type">Location Type:</label>
            <select class="admin-input" id="location_type" name="location_type" required>
                <option value="On-site">On-site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
            </select>
        </div>
        

        <div class="admin-form-group">
            <label class="admin-label" for="employment_type">Employment Type:</label>
            <select class="admin-input" id="employment_type" name="employment_type" required>
                <option value="Internship">Internship</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Part-time">Part-time</option>
                <option value="Full-time">Full-time</option>
            </select>
        </div>
        
        <div class="admin-form-group">
            <label class="admin-label" for="company_id">Company:</label>
            <select class="admin-input" id="company_id" name="company_id" required>
                @foreach($companies as $companyId => $companyName)
                    <option value="{{ $companyId }}">{{ $companyName }}</option>
                @endforeach
            </select>
        </div>
        <div class="admin-form-group">
            <input class="admin-submit" type="submit" value="Create Job">
        </div>
    </form>
</div>
@endsection
