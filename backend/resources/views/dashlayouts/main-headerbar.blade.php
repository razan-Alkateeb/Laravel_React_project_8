<nav style="background: #343572" class="main-header navbar navbar-expand navbar-white navbar-light bg-black">
  <div class="container">
    {{-- Admin Image and Name Container --}}
    <div style="display: flex; align-items: center; margin-right: 10px;">
      {{-- Admin Image --}}
      @if(session('loginimage'))
        <img src="{{ session('loginimage') }}" alt="Admin Image" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
      @endif

      {{-- Admin Name --}}
      @if(session('loginname'))
        <span style="color: white; font-weight: bold;">{{ session('loginname') }}</span>
      @endif
    </div>

    {{-- Logout Button --}}
    <form action="{{ route('adminlogout') }}" method="POST" style="margin-right: 10px;">
      @csrf
      <button type="submit" class="btn btn-primary">Log out</button>
    </form>
  </div>
</nav>
