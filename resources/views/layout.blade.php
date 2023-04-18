<!DOCTYPE html>
<html lang="@lang('lang.current')">
@include('inc.head')
<body id="body">
   <div class="wrapper">
      @include('inc.header')
         <main class="page">
            @yield('content')
         </main>
      @include('inc.footer')
   </div>
   @include('inc.popup')
   @vite(['resources/js/app.js'])
</body>

</html>