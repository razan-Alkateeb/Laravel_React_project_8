@extends('dashlayouts.master')

@section('title')
    Table
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Donations
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <a href="{{ route('userdash.create') }}" class="add-user-button">
            <button class="btn btn-primary mb-2">Add New user</button>
        </a>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Users</h3>
                    </div>
                    <table id="example2" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Image</th>
                                <th>Gender</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>LinkedIn</th>
                                <th>Academic Specialization</th>
                                <th>Academic Level</th>
                                <th>Professional Level</th>
                                <th>Career Field</th>
                                <th>Job Title</th>
                                <th>Years of Experience</th>
                                <th>CV</th>
                                <th>Subscription</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($users as $user)
                            <tr>
                                <td>{{ $user->name }}</td>
                                <td>{{ $user->email }}</td>
                                <td><img src="/img/{{ $user->image }}" alt="User Image" width="50"></td>
                                <td>{{ $user->gender }}</td>
                                <td>{{ $user->address }}</td>
                                <td>{{ $user->phone_number }}</td>
                                <td>{{ $user->linkedin_link }}</td>
                                <td>{{ $user->academic_specialization }}</td>
                                <td>{{ $user->academic_level }}</td>
                                <td>{{ $user->professional_level }}</td>
                                <td>{{ $user->career_field }}</td>
                                <td>{{ $user->job_title }}</td>
                                <td>{{ $user->years_of_experience }}</td>
                                <td><a href="{{ asset($user->cv_path) }}" target="_blank">View CV</a></td>
                                <td>{{ $user->subscription }}</td>
                                <td>
                                    <form method="POST" action="{{ url('/userdash' . '/' . $user->id) }}" style="display: inline;">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-m" onclick="return confirm('Confirm Delete?')">Delete</button>
                                    </form>

                                </td>
                            </tr>
                            @endforeach
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </section>
    <!-- /.content -->
@endsection
