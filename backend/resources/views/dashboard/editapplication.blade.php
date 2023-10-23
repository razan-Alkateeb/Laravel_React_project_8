@extends('dashlayouts.master')

@section('title')
    Edit Application
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Applications
@endsection

@section('content')
<div class="admin-container">
    <h2>Edit Application</h2>
    <form action="{{ url('applicationdash/' . $application->id) }}" method="POST" enctype="multipart/form-data" class="admin-form">
        @csrf
        @method('PUT')

        <div class="admin-form-group">
            <label class="admin-label" for="user_id">User ID:</label>
            <input class="admin-input" type="text" id="user_id" name="user_id" value="{{ $application->user_id }}" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="job_id">Job ID:</label>
            <input class="admin-input" type="text" id="job_id" name="job_id" value="{{ $application->job_id }}" required>
        </div>

        <div class="admin-form-group">
            <label class="admin-label" for="status">Status:</label>
            <input class="admin-input" type="text" id="status" name="status" value="{{ $application->status }}" required>
        </div>

        <div class="admin-form-group">
            <input class="admin-submit" type="submit" value="Update Application">
        </div>
    </form>
</div>
@endsection
