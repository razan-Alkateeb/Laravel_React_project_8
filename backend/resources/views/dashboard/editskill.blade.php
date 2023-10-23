@extends('dashlayouts.master')

@section('title')
    Edit Skill
@endsection

@section('content')
    <!-- Edit Skill Form -->
    <div class="admin-container">
        <h2>Edit Skill</h2>
        <form class="admin-form" method="POST" action="{{ route('skilldash.update', $skill->id) }}">
            @csrf
            @method('PUT')

            <div class="admin-form-group">
                <label class="admin-label" for="job_id">Job ID:</label>
                <input class="admin-input" type="text" id="job_id" name="job_id" value="{{ $skill->job_id }}" required>
            </div>

            <div class="admin-form-group">
                <label class="admin-label" for="skill_name">Skill Name:</label>
                <input class="admin-input" type="text" id="skill_name" name="skill_name" value="{{ $skill->skill_name }}" required>
            </div>

            <!-- Add more input fields for other fields if necessary -->

            <div class="admin-form-group">
                <input class="admin-submit" type="submit" value="Update Skill">
            </div>
        </form>
    </div>
@endsection
