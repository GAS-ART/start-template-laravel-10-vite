@section('header')
<header class="header">
   <div class="header__wraper">
      <div class="header__container">

         <div class="header__options">

            <div class="header__actions">
               <!--Для выпадающего списка языков-->
               <div class="header__language language-btn">
                  <div class="language-btn__select">
                     <a class="language-btn__link @lang('lang.current')"
                        href="{{ route('locale', __('lang.current')) }}">
                        <div class="language-btn__text">@lang('lang.current')</div>
                        <div class="language-btn__icon @lang('lang.current')"></div>
                     </a>
                  </div>
                  <div class="language-btn__select">
                     <a class="language-btn__link" href="{{ route('locale', __('lang.another')) }}">
                        <div class="language-btn__text">@lang('lang.another')</div>
                        <div class="language-btn__icon @lang('lang.another')"></div>
                     </a>
                  </div>
               </div>
               <!--Для выпадающего списка языков-->
            </div>
         </div>

      </div>
   </div>
</header>