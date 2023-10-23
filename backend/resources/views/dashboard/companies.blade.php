@extends('dashlayouts.master')

@section('title')
    Table
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Companies
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <a href="{{ route('companiesdash.create') }}" class="add-user-button"><button class="btn btn-primary mb-2">Add New
            Company</button></a>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Companies</h3>
                    </div>

                    <table id="example2" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Description</th>
                                <th>Website</th>
                                <th>Phone Number</th>
                                <th>Industry ID</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($companies as $company)
                            <tr>
                                <td>{{ $company->name }}</td>
                                <td>{{ $company->email }}</td>
                                <td>{{ $company->description }}</td>
                                <td>{{ $company->website }}</td>
                                <td>{{ $company->phone_number }}</td>
                                <td>{{ $company->industry_id }}</td>
                                <td>
                                    <form method="POST" action="{{ url('/companiesdash' . '/' . $company->id) }}" style="display: inline;">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-m" onclick="return confirm('Confirm Delete?')">Delete</button>
                                    </form>

                                    <a  class="btn btn-success" href="{{ route('companiesdash.edit',$company->id)}}"> Edit </a>
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
