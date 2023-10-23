@extends('dashlayouts.master')

@section('title')
    Table
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Industries
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <a href="{{ route('industrydash.create') }}" class="add-user-button">
            <button class="btn btn-primary mb-2">Add New Industry</button>
        </a>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Industries</h3>
                    </div>

                    <table id="example2" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Industry Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($industries as $industry)
                            <tr>
                                <td>{{ $industry->name }}</td>
                                <td>
                                    <form method="POST" action="{{ url('/industrydash' . '/' . $industry->id) }}" style="display: inline;">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-m" onclick="return confirm('Confirm Delete?')">Delete</button>
                                    </form>
                                    
                                    <a  class="btn btn-success" href="{{ route('industrydash.edit',$industry->id)}}"> Edit </a>
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
