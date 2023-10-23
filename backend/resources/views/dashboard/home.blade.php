@extends('dashlayouts.master')
@section('title')
Dashboard
@endsection


@section('title1')


Home

@endsection


@section('title2')
Dashboard
@endsection


@section('css')

@endsection

@section('content')
<section class="content">
    <div class="container-fluid">
      <!-- Small boxes (Stat box) -->
      <div class="row">
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box "  style="background-color: #8c8c8c">
            <div class="inner">
                <h3>{{ count($users ?? []) }}<sup style="font-size: 20px"></sup></h3>
           
            
              <p>User number</p>
            </div>
            <div class="icon">
                <i class="nav-icon fas fa-user"></i>
            </div>
            <a href="{{ asset('/userdash') }}" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box "  style="background-color: #8c8c8c">
            <div class="inner">
              <h3>{{count($admins ?? []) }}<sup style="font-size: 20px"></sup></h3>


              <p>Admin number</p>
            </div>
            <div class="icon">
                <i class="ion ion-person-add"></i>
            </div>
            <a href="{{ asset('/admindash') }}" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box "  style="background-color: #8c8c8c">
            <div class="inner">
              <h3>{{count($jobs ?? []) }}<sup style="font-size: 20px"></sup></h3>

              <p>Job</p>
            </div>
            <div class="icon">
              <i class="nav-icon fas fa-briefcase"></i>
            </div>
            <a href="{{ asset('/jobdash') }}" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box "  style="background-color: #8c8c8c">
            <div class="inner">
              <h3>{{count($companies ?? []) }}<sup style="font-size: 20px"></sup></h3>
                

              <p>companies</p>
            </div>
            <div class="icon">
              <i class="fas fa-building"></i>
            </div>
            <a href="{{ asset('/companiesdash') }}" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
      </div></div>




        </section>


@endsection

@section('scripts')

@endsection
