@extends('dashlayouts.master')

@section('title')
    Table
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Create Qualification
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Add New Qualification</h3>
                    </div>
                    <div class="card-body">
                        <form method="POST" action="{{ route('qualificationdash.store') }}">
                            @csrf

                            <div class="form-group">
                                <label for="job_id">Job ID:</label>
                                <select id="job_id" name="job_id" class="form-control" required>
                                    @foreach($jobs as $jobId)
                                        <option value="{{ $jobId }}">{{ $jobId }}</option>
                                    @endforeach
                                </select>
                            </div>
                            

                            <div class="form-group">
                                <label for="qualification_name">Qualification Name:</label>
                                <input type="text" id="qualification_name" name="qualification_name" class="form-control" required>
                            </div>

                            <button type="submit" class="btn btn-primary">Add Qualification</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
