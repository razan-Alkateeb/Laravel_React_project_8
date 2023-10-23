<!-- jQuery -->


<script src="{{URL::asset('assets/plugins/jquery/jquery.min.js') }}"></script>




<!-- jQuery UI 1.11.4 -->

<script src="{{URL::asset('assets/plugins/jquery-ui/jquery-ui.min.js') }}"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>
<!-- Bootstrap 4 -->

<script src="{{URL::asset('assets/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<!-- ChartJS -->

<script src="{{URL::asset('assets/plugins/chart.js/Chart.min.js') }}"></script>
<!-- Sparkline -->

<script src="{{URL::asset('assets/plugins/sparklines/sparkline.js') }}"></script>
<!-- JQVMap -->

<script src="{{URL::asset('assets/plugins/jqvmap/jquery.vmap.min.js') }}"></script>



<script src="{{URL::asset('assets/plugins/jqvmap/maps/jquery.vmap.usa.js') }}"></script>
<!-- jQuery Knob Chart -->

<script src="{{URL::asset('assets/plugins/jquery-knob/jquery.knob.min.js') }}"></script>
<!-- daterangepicker -->

<script src="{{URL::asset('assets/plugins/moment/moment.min.js') }}"></script>



<script src="plugins/daterangepicker/daterangepicker.js"></script>
<!-- Tempusdominus Bootstrap 4 -->
<script src="plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
<!-- Summernote -->
<script src="plugins/summernote/summernote-bs4.min.js"></script>
<!-- overlayScrollbars -->
<script src="plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.js"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script src="dist/js/pages/dashboard.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="dist/js/demo.js"></script>
@yield('scripts')
