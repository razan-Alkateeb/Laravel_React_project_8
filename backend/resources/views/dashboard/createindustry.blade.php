@extends('dashlayouts.master')

@section('title')
    Create Company
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Create industry
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <form action="{{ route('industrydash.store') }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group">
                                <label for="name">industry Name:</label>
                                <input type="text" class="form-control" id="name" name="name" required>
                            </div> <button type="submit" class="btn btn-primary">Create industry</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
