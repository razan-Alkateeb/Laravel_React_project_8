@extends('dashlayouts.master')

@section('title')
    Table
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Locations
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <a href="{{ route('locationdash.create') }}" class="add-user-button">
            <button class="btn btn-primary mb-2">Add New location</button>
        </a>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Locations</h3>
                    </div>

                    <table id="example2" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Company ID</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($locations as $location)
                            <tr>
                                <td>{{ $location->company_id }}</td>
                                <td>{{ $location->name }}</td>
                                <td>
                                    <form method="POST" action="{{ url('/locationdash' . '/' . $location->id) }}" style="display: inline;">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-m" onclick="return confirm('Confirm Delete?')">Delete</button>
                                    </form>
                                    
                                    <a  class="btn btn-success" href="{{ route('locationdash.edit',$location->id)}}"> Edit </a>
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
