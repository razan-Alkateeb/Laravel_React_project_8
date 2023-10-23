@extends('dashlayouts.master')

@section('title')
    Table
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Create Responsible
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Add New Responsible</h3>
                    </div>
                    <div class="card-body">                                             
                        <form method="POST" action="{{ route('responsibledash.store') }}">
                            @csrf

                            <div class="form-group">
                                <label for="job_id">Job ID:</label>
                                <input type="text" id="job_id" name="job_id" class="form-control" required>
                            </div>

                            <div class="form-group">
                                <label for="responsibility_name">Responsibility Name:</label>
                                <input type="text" id="responsibilitie_name" name="responsibilitie_name" class="form-control" required>
                            </div>

                            <button type="submit" class="btn btn-primary">Add Responsible</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
