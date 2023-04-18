<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

/* Route::get('/', function () {
    return view('welcome');
}); */


Route::get('/locale/{locale}',  'App\Http\Controllers\LanguagesController@changeLocale')->name('locale');
Route::post('/send-main-form', 'App\Http\Controllers\sendController@submit')->name('sendMainForm');

Route::get('/', function () {
    App::setLocale('ua');
    return view('home');
  })->name('index.lang');
  Route::get('/ua', function () {
    App::setLocale('ua');
    return  redirect('/');
  });
  
  Route::get('/{locale}', function ($locale) {
    if (!in_array($locale, ['ua', 'ru'])) {
  
      abort(404);
    } else if ($locale == 'ua') {
  
      App::setLocale('ua');
      return view('home');
    } else if ($locale == 'ru') {
  
      App::setLocale('ru');
      return view('home');
    }
  })->name('home');


  Route::get('/{locale}/form', function ($locale) {
    if (!in_array($locale, ['ua', 'ru'])) {
  
      abort(404);
    } else if ($locale == 'ua') {
  
      App::setLocale('ua');
      return view('form');
    } else if ($locale == 'ru') {
  
      App::setLocale('ru');
      return view('form');
    }
  })->name('form');