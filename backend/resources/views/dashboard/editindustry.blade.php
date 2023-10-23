@extends('dashlayouts.master')

@section('title')
    Edit industry
@endsection

@section('title1')
    Dashboard
@endsection

@section('title2')
    industries
@endsection

@section('content')
<div class="admin-container">
    <h2>Edit industry</h2>
    <form action="{{ url('industrydash/' . $industry->id) }}" method="POST" enctype="multipart/form-data" class="admin-form">
        @csrf
        @method('PUT')
    
        <div class="admin-form-group">
            <label class="admin-label" for="name">Name:</label>
            <input class="admin-input" type="text" id="name" name="name" value="{{ $industry->name }}" required>
        </div>
        <div class="admin-form-group">
            <input class="admin-submit" type="submit" value="Update industry">
        </div>
    </form>
    
</div>
@endsection
