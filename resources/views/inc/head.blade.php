@section('head')

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">


   <!-- FAVICON https://favicon.io/favicon-converter/ -->
   <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('img/favicon/apple-touch-icon.png') }}">
   <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('img/favicon/favicon-32x32.png') }}">
   <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('img/favicon/favicon-16x16.png')}} ">

   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link
      href="https://fonts.googleapis.com/css2?family=Inter&family=Mulish:wght@300;400;500;700;900&family=Poppins:wght@500;600&display=swap"
      rel="stylesheet">


   <title>@yield('title')</title>
   <meta name="description" content="@yield('description')">
   {{-- TELEGRAM BOT FOR UPDATE URL PAGE INFO @WebpageBot --}}
   <meta property="og:url" content="{{ url()->current() }}" />
   <meta property="og:type" content="website" />
   <meta property="og:title" content="@yield('ogTitle')" />
   <meta property="og:description" content="@yield('ogDescription')" />
   <meta property="og:site_name" content="ruban-dentist.com.ua" />
   <!--  <meta property="og:image" content="{{ asset('img/avatar/3.jpg')}}"/> -->

   @vite(['resources/scss/style.scss'])

   <!-- Global site tag (gtag.js) - Google Analytics -->

</head>