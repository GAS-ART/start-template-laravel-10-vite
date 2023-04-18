@extends('layout') 
@section('title', __('titles.home.title'))
@section('description', __('titles.home.description')) 
@section('ogTitle' ,__('titles.home.ogTitle')) 
@section('ogDescription', __('titles.home.ogDescription')) 
@section('ogUrl', __('titles.home.ogUrl'))
@section('page', 'home') 

@section('content')

<div class="test__container  ">
    <div class="icons">
        <div class="icon icon-energy"></div>
    </div>
    @lang('home.test')<br /><br />
    <a href="{{ route('home', ['locale' => __('lang.ua')]) }}">UA</a>
    <br /><br />
    <a href="{{ route('home', ['locale' => __('lang.ru')]) }}">RU</a>
    <br /><br />
    <div class="_icon-mail test"></div>
    <!-- <img src="{{asset('/img/icons/instagram.svg')}}" alt=""> -->
    <div class="bg"></div>
    <img src="{{ asset('img/img.jpg') }}" />

    <a href="{{ route('form', ['locale' => __('lang.current')]) }}">LINK TO FORM</a>

    <div class="mulish">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad eius magni
        adipisci et? Reiciendis eveniet veritatis in eligendi, cum deserunt,
        illum placeat similique velit quibusdam aspernatur error necessitatibus
        nihil porro? Obcaecati corporis velit expedita distinctio est vitae
        alias nihil nulla nesciunt tempora exercitationem cupiditate omnis
        culpa, voluptatem totam commodi voluptatibus, quisquam blanditiis
        consequatur molestiae dolore, facilis eum quae quos! Dignissimos.
        Reprehenderit soluta illo necessitatibus? Quis eaque consequatur
        voluptates ea tenetur iste assumenda enim dicta dolore nulla debitis
        voluptatum provident qui fugiat perspiciatis autem consectetur laborum,
        ullam iusto. Recusandae, modi laudantium! Quod magni enim excepturi.
        Molestias iure iusto inventore omnis enim sit sint magni. Doloremque
        dolorum nisi ut odit ipsam eligendi cum asperiores, accusantium
        doloribus non esse nulla, repudiandae illo tenetur! Odio iusto maxime
        itaque similique delectus ad, quos neque, praesentium expedita dolore id
        tempora consectetur nisi odit saepe quia blanditiis corporis soluta
        sequi, ab harum suscipit? Placeat voluptas saepe odio.
    </div>
</div>

@endsection
