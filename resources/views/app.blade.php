<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>ASB</title>
  <link rel="shortcut icon" type="image/x-icon" href="{{ asset('images/logo.ico') }}" />
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="stylesheet" href="{{ mix('css/main.css') }}">
</head>

<body class="antialiased">

  <div id="app"></div>

  <script src="{{ mix('js/app.js') }}"></script>
  <script>
    // $.ajaxSetup({
    //     headers: {
    //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //     }
    // });
  </script>
</body>

</html>
