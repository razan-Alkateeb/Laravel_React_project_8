@extends('dashlayouts.master')

@section('title')
    Table
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    admins
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <a href="{{ route('admindash.create') }}" class="add-user-button"><button class="btn btn-primary mb-2">Add New
            Admin</button></a>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Admins</h3>
                    </div>

                    <table id="example2" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($admins as $admin)
                            <tr>
                                <td>{{ $admin->name }}</td>
                                <td>{{ $admin->email }}</td>
                                <td><img src="{{ $admin->image }}" alt="Admin Image" width="50">
                                </td>
                                <td>
                                    <form method="POST" action="{{ url('/admindash' . '/' . $admin->id) }}" style="display: inline;">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-m" onclick="return confirm('Confirm Delete?')">Delete</button>
                                    </form>

                                    <a  class="btn btn-success" href="{{ route('admindash.edit',$admin->id)}}"> Edit </a>
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
