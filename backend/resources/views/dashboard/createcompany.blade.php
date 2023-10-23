@extends('dashlayouts.master')

@section('title')
    Create Company
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Create Company
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <form action="{{ route('companiesdash.store') }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group">
                                <label for="name">Company Name:</label>
                                <input type="text" class="form-control" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Password:</label>
                                <input type="password" class="form-control" id="password" name="password" required>
                            </div>
                            <div class="form-group">
                                <label for="description">Description:</label>
                                <textarea class="form-control" id="description" name="description" required></textarea>
                            </div>
                            <div class="form-group">
                                <label for="website">Website:</label>
                                <input type="text" class="form-control" id="website" name="website" required>
                            </div>
                            <div class="form-group">
                                <label for="phone_number">Phone Number:</label>
                                <input type="text" class="form-control" id="phone_number" name="phone_number" required>
                            </div>
                            <div class="form-group">
                                <label for="location_map">Location Map:</label>
                                <input type="text" class="form-control" id="location_map" name="location_map" required>
                            </div>
                            <div class="form-group">
                                <label for="industry_id">Industry ID:</label>
                                <select id="industry_id" name="industry_id" class="form-control" required>
                                    @foreach($industries as $industryId)
                                        <option value="{{ $industryId }}">{{ $industryId }}</option>
                                    @endforeach
                                </select>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Create Company</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
