@extends('dashlayouts.master')

@section('title')
    Table
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    Job Skills
@endsection

@section('content')
    <!-- Main content -->
    <section class="content">
        <a href="{{ route('skilldash.create') }}" class="add-user-button">
            <button class="btn btn-primary mb-2">Add New skill</button>
        </a>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Job Skills</h3>
                    </div>

                    <table id="example2" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Job ID</th>
                                <th>Skill Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($skills as $skill)
                            <tr>
                                <td>{{ $skill->job_id }}</td>
                                <td>{{ $skill->skill_name }}</td>
                                <td>
                                    <form method="POST" action="{{ url('/skilldash' . '/' . $skill->id) }}" style="display: inline;">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-m" onclick="return confirm('Confirm Delete?')">Delete</button>
                                    </form>
                                    
                                    <a  class="btn btn-success" href="{{ route('skilldash.edit',$skill->id)}}"> Edit </a>
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
