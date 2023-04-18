<?php
$languages = ['ru', 'ua' ];
$url = url()->current();
$protacol = Str::before($url, '://') . "://";
$urlPart = Str::of($url)->after($protacol);
$domain = Str::before( $urlPart, '/') . "/";
$urlPart = Str::after($urlPart, $domain);
$urlLanguagePrefix = Str::substr($urlPart, 0, 2);
if(Str::contains($urlLanguagePrefix, $languages)){
   app()->setLocale($urlLanguagePrefix);
} else {
   app()->setLocale("ua");
}
?>
@extends('layout')
@section('title', __('404.tittle'))
@section('description', __('404.text'))
@section('ogTitle', __('404.text'))
@section('ogDescription', __('404.tittle'))
@section('ogUrl', __(url()->current()))


@section('content')
<section class="page-404">
   <div class="page-404__container">
      <div class="page-404__body">
         <h1 class="page-404__tittle">@lang('404.tittle')</h1>
         <div class="page-404__text">
            <p>@lang('404.text')</p>
         </div>
         <div class="page-404__button">
            <a href="{{ route('home', ['locale' => __('lang.current')]) }}" class="button button-404">@lang('404.link')</a>
         </div>
      </div>
   </div>
</section>
@endsection