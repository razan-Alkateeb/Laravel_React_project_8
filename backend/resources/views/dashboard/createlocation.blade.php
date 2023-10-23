@extends('dashlayouts.master')

@section('title')
    Create location
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Create location
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <form action="{{ route('locationdash.store') }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group">
                                <label for="name">location Name:</label>
                                <input type="text" class="form-control" id="name" name="name" required>
                            </div>
                            
                             <div class="admin-form-group">
                           <label class="admin-label" for="company_id">Company ID:</label>
                            <input class="admin-input" type="text" id="company_id" name="company_id" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Create location</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
