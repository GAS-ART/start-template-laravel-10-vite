<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use mysql_xdevapi\Session;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class languagesController extends Controller
{

    public function changeLocale($locale) {

        $mainLanguage = "ua";
        $url = URL::previous();
        $protocol = Str::before($url, '://') . "://";
        $urlPart = Str::of($url)->after($protocol);
        $domain = $protocol . Str::before( $urlPart, '/') . "/";
        if($url == $domain && $locale == $mainLanguage){
            return redirect($url);
        } else if ($url == $domain && $locale != $mainLanguage){
            return redirect($url . $locale);
        }

        $urlPart = Str::of($url)->after($domain);
        $urlLanguagePrefix = Str::substr($urlPart, 0, 2);
        $urlPart = Str::after($urlPart, $urlLanguagePrefix);
        return redirect($domain . $locale . $urlPart);
    }
}
