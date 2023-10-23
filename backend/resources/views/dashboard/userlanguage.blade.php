@extends('dashlayouts.master')

@section('title')
    Table
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    User Languages
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">User Languages</h3>
                    </div>

                    <table id="example2" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Language ID</th>
                                <th>Level</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($userlanguages as $userlanguage)
                            <tr>
                                <td>{{ $userlanguage->user_id }}</td>
                                <td>{{ $userlanguage->language_id }}</td>
                                <td>{{ $userlanguage->level }}</td>
                                <td>
                                <form method="POST" action="{{ url('/userlanguagedash' . '/' . $userlanguage->id) }}" style="display: inline;">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger btn-m" onclick="return confirm('Confirm Delete?')">Delete</button>
                                </form>
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
