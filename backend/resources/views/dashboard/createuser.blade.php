@extends('dashlayouts.master')

@section('title')
    Create User
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Create User</h3>
                    </div>
                    <div class="card-body">
                        <form action="{{ route('userdash.store') }}" method="POST">
                            @csrf
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input type="text" class="form-control" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="admin-form-group">
                                <label class="admin-label" for="password">Password:</label>
                                <input class="admin-input" type="password" id="password" name="password" required>
                            </div>
                            <div class="form-group">
                                <label for="gender">Gender:</label>
                                <select class="form-control" id="gender" name="gender" >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="address">Address:</label>
                                <textarea class="form-control" id="address" name="address" rows="3" ></textarea>
                            </div>
                            <div class="form-group">
                                <label for="phone_number">Phone:</label>
                                <input type="tel" class="form-control" id="phone_number" name="phone_number" >
                            </div>
                            <div class="form-group">
                                <label for="linkedin_link">LinkedIn Profile:</label>
                                <input type="url" class="form-control" id="linkedin_link" name="linkedin_link" >
                            </div>
                            <div class="form-group">
                                <label for="academic_specialization">Academic Major:</label>
                                <input type="text" class="form-control" id="academic_specialization" name="academic_specialization" >
                            </div>
                            <div class="form-group">
                                <label for="academic_level">Academic Degree:</label>
                                <input type="text" class="form-control" id="academic_level" name="academic_level" >
                            </div>
                            <div class="form-group">
                                <label for="professional_level">Experience Level:</label>
                                <input type="text" class="form-control" id="professional_level" name="professional_level" >
                            </div>
                            <div class="form-group">
                                <label for="career_field">career_field:</label>
                                <input type="text" class="form-control" id="career_field" name="career_field" >
                            </div>
                            <div class="form-group">
                                <label for="job_title">Job Title:</label>
                                <input type="text" class="form-control" id="job_title" name="job_title" >
                            </div>
                           
                            <div class="form-group">
                                <label for="years_of_experience">Years of Experience:</label>
                                <input type="number" class="form-control" id="years_of_experience" name="years_of_experience" >
                            </div>
                            <div class="form-group">
                                <label for="cv">CV:</label>
                                <input type="url" class="form-control" id="cv" name="cv" >
                            </div>
                            <div class="form-group">
                                <label for="status">subscription:</label>
                                <input type="text" class="form-control" id="subscription" name="subscription" >
                            </div>
                           
                    
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /.content -->
@endsection
