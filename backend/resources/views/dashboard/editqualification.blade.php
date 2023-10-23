@extends('dashlayouts.master')

@section('title')
    Table
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Edit Qualification
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Edit Qualification</h3>
                    </div>
                    <div class="card-body">
                        <form action="{{ url('qualificationdash/' . $qualification->id) }}" method="POST" enctype="multipart/form-data" class="admin-form">
                            @csrf
                            @method('PUT')

                            <div class="form-group">
                                <label for="job_id">Job ID:</label>
                                <input type="text" id="job_id" name="job_id" class="form-control" value="{{ $qualification->job_id }}" required>
                            </div>

                            <div class="form-group">
                                <label for="qualification_name">Qualification Name:</label>
                                <input type="text" id="qualification_name" name="qualification_name" class="form-control" value="{{ $qualification->qualification_name }}" required>
                            </div>

                            <button type="submit" class="btn btn-primary">Update Qualification</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
