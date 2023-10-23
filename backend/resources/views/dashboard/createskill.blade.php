@extends('dashlayouts.master')

@section('title')
    Create Skill
@endsection

@section('content')
    <!-- Create Skill Form -->
    <div class="admin-container">
        <h2>Create Skill</h2>
        <form class="admin-form" method="POST" action="{{ route('skilldash.store') }}">
            @csrf

            <div class="admin-form-group">
                <label class="admin-label" for="job_id">Job ID:</label>
                <input class="admin-input" type="text" id="job_id" name="job_id" required>
            </div>

            <div class="admin-form-group">
                <label class="admin-label" for="skill_name">Skill Name:</label>
                <input class="admin-input" type="text" id="skill_name" name="skill_name" required>
            </div>

            <!-- Add more input fields for other fields if necessary -->

            <div class="admin-form-group">
                <input class="admin-submit" type="submit" value="Add Skill">
            </div>
        </form>
    </div>
@endsection
