@extends('dashlayouts.master')

@section('title')
    Create language
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Create language
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <form action="{{ route('languagedash.store') }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group">
                                <label for="name">language Name:</label>
                                <input type="text" class="form-control" id="name" name="name" required>
                            </div> <button type="submit" class="btn btn-primary">Create language</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
