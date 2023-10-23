@extends('dashlayouts.master')

@section('title')
    Table
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Jobs
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <a href="{{ route('jobdash.create') }}" class="add-user-button">
            <button class="btn btn-primary mb-2">Add New job</button>
        </a>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Jobs</h3>
                    </div>

                    <table id="example2" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Salary</th>
                                <th>Deadline Date</th>
                                <th>Professional Level</th>
                                <th>Location Type</th>
                                <th>Employment Type</th>
                                <th>Company ID</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($jobs as $job)
                            <tr>
                                <td>{{ $job->title }}</td>
                                <td>{{ $job->description }}</td>
                                <td>{{ $job->salary }}</td>
                                <td>{{ $job->deadline_date }}</td>
                                <td>{{ $job->professional_level }}</td>
                                <td>{{ $job->location_type }}</td>
                                <td>{{ $job->employment_type }}</td>
                                <td>{{ $job->company_id }}</td>
                                <td>
                                    <form method="POST" action="{{ url('/jobdash' . '/' . $job->id) }}" style="display: inline;">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-m" onclick="return confirm('Confirm Delete?')">Delete</button>
                                    </form>
                                    
                                    <a  class="btn btn-success" href="{{ route('jobdash.edit',$job->id)}}"> Edit </a>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
@endsection
