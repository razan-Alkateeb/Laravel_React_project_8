@extends('dashlayouts.master')

@section('title')
    Table
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Edit Responsible
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Edit Responsible</h3>
                    </div>
                    <div class="card-body">
                        <form method="POST" action="{{ route('responsibledash.update', $responsible->id) }}">
                            @csrf
                            @method('PUT')

                            <div class="form-group">
                                <label for="job_id">Job ID:</label>
                                <input type="text" id="job_id" name="job_id" class="form-control" value="{{ $responsible->job_id }}" required>
                            </div>

                            <div class="form-group">
                                <label for="responsibility_name">Responsibility Name:</label>
                                <input type="text" id="responsibility_name" name="responsibilitie_name" class="form-control" value="{{ $responsible->responsibilitie_name }}" required>
                            </div>

                            <button type="submit" class="btn btn-primary">Update Responsible</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
