$(document).keydown(function(e){if(e.keyCode==27){$('.plugin_arrived-popup .popup-close').click()}});$(document).ready(function(){lozad('.demilazyload').observe();$('input[type="password"]').attr('placeholder','Пароль');$('button.menu').click(function(){if($('.mobile_info_menu').is('.open')){$('.top_buttons .info').click()}
$('.bg').toggleClass('show')
$('.category_menu').toggleClass('show');$(this).toggleClass('open');$('body').toggleClass('open_menu')});if(MatchMedia("only screen and (min-width: 640px)")){$('.category_menu .level1 > div a').hover(function(){var cid=$(this).parent().attr('class').replace('active','').replace('ch','');$('.category_menu .level1 > div').removeClass('active');$(this).parent().addClass('active')
$('.category_menu .level2 > div').removeClass('show');$('.category_menu .level2 .'+cid).addClass('show')})}
$('body').on('click','button.plus',function(e){var kol=$(this).parent().find('input');kol.val(parseInt(kol.val())+1).change()});$('body').on('click','button.minus',function(e){var kol=$(this).parent().find('input');if(parseInt(kol.val())>1){kol.val(parseInt(kol.val())-1).change()}});$('body').on('click','.bg, .fixed-overlay, .plugin_arrived-overlay, .annulment',function(e){if(e.target.closest(".modal_container")&&!$(this).is('.annulment')){return}
if(e.target.closest(".plugin_arrived-custom")){return}
$('.show').removeClass('show');$('button.menu').removeClass('open');$('body').removeClass('open_menu');$('.cart_popup').remove();$('.plugin_arrived-popup .popup-close').click()});$('.cart-popup').click(function(){if($('.cart-count').html()=="0"){return!1}else{var loading=$('<div><i class="icon16 loading">Loading...</i></div>'),prdu=$(this).data('href'),modal='<div class="fixed-overlay fixed-overlay__modal cart_popup">\n'+'<div class="modal">\n'+'<i class="popup-close"></i>\n'+'<div class="modal_container">\n'+'</div>\n'+'</div>\n'+'</div>';$('body').append(modal);$('.cart_popup .modal_container').append(loading).load(prdu+' .cart-summary-page',{random:"1"},function(){$(this).prepend('<script src="/wa-data/public/shop/themes/newgoodtoys/cart.js"><\/script>').find('.loading').parent().remove();lozad('.demilazyload').observe()})}});$('body').on('click','.login-popup, .wa-login-url a',function(e){$('.info.open').click();$('.show').removeClass('show');$('.login_popup').addClass('show');return!1});$('body').on('click','.wa-login-forgotpassword-url',function(e){$('.show').removeClass('show');$('.forgot_popup').addClass('show');return!1});$('.category-grid').on('click','.filter_button',function(e){$('.category-grid .filters').toggleClass('open');$('body').toggleClass('open_menu')});$('.category-grid').on('click','.close_filter',function(e){$('.filter_button').click()});$('.wa-field-firstname input').attr('autocomplete','name');$('.wa-field-lastname input').attr('autocomplete','family-name');$('.wa-field-phone input').attr('autocomplete','tel');$('.wa-field-email input').attr('autocomplete','email')});(function($){var enter,leave;var storage={activeClass:"submenu-is-shown",activeShadowClass:"is-shadow-shown",showTime:200,$last_li:!1};var bindEvents=function(){var $selector=$(".flyout-nav > li"),links=$selector.find("> a");$selector.on("mouseenter",function(){showSubMenu($(this))});$selector.on("mouseleave",function(){hideSubMenu($(this))});links.on("click",function(){onClick($(this).closest("li"))});links.each(function(){var link=this,$li=$(link).closest("li"),has_sub_menu=($li.find(".flyout").length);if(has_sub_menu){link.addEventListener("touchstart",function(event){onTouchStart(event,$li)},!1)}});$("body").get(0).addEventListener("touchstart",function(event){onBodyClick(event,$(this))},!1)};var onBodyClick=function(event){var activeBodyClass=storage.activeShadowClass,is_click_on_shadow=($(event.target).hasClass(activeBodyClass));if(is_click_on_shadow){var $active_li=$(".flyout-nav > li."+storage.activeClass).first();if($active_li.length){hideSubMenu($active_li)}}};var onClick=function($li){var is_active=$li.hasClass(storage.activeClass);if(is_active){var href=$li.find("> a").attr("href");if(href&&(href!=="javascript:void(0);")){hideSubMenu($li)}}else{showSubMenu($li)}};var onTouchStart=function(event,$li){event.preventDefault();var is_active=$li.hasClass(storage.activeClass);if(is_active){hideSubMenu($li)}else{var $last_li=$(".flyout-nav > li."+storage.activeClass);if($last_li.length){storage.$last_li=$last_li}
showSubMenu($li)}};var showSubMenu=function($li){var is_active=$li.hasClass(storage.activeClass),has_sub_menu=($li.find(".flyout").length);if(is_active){clearTimeout(leave)}else{if(has_sub_menu){enter=setTimeout(function(){if(storage.$last_li&&storage.$last_li.length){clearTimeout(leave);storage.$last_li.removeClass(storage.activeClass)}
$li.addClass(storage.activeClass);toggleMainOrnament(!0)},storage.showTime)}}};var hideSubMenu=function($li){var is_active=$li.hasClass(storage.activeClass);if(!is_active){clearTimeout(enter)}else{storage.$last_li=$li;leave=setTimeout(function(){$li.removeClass(storage.activeClass);toggleMainOrnament(!1)},storage.showTime*2)}};var toggleMainOrnament=function($toggle){var $body=$("body"),activeClass=storage.activeShadowClass;if($toggle){$body.addClass(activeClass)}else{$body.removeClass(activeClass)}};$(document).ready(function(){bindEvents()})})(jQuery);var MatchMedia=function(media_query){var matchMedia=window.matchMedia,is_supported=(typeof matchMedia==="function");if(is_supported&&media_query){return matchMedia(media_query).matches}else{return!1}};$(document).ready(function(){if($('#logo').length){$(window).load(function(){var _logo_height=$('#logo').height();var _logo_vertical_shift=Math.round((_logo_height-25)/2);$('#globalnav').css('padding-top',_logo_vertical_shift+'px');$('#logo').css('margin-top','-'+_logo_vertical_shift+'px')})}
$('.ssearch-right .clean').click(function(){$('#search_query').val("").change().keyup()});$('#mobile-nav-toggle').click(function(){if(!$('.nav-negative').length){$('body').prepend($('header .apps').clone().removeClass('apps').addClass('nav-negative'));$('body').prepend($('header .auth').clone().addClass('nav-negative'));$('body').prepend($('header .search').clone().addClass('nav-negative'));$('body').prepend($('header .offline').clone().addClass('nav-negative'));$('.nav-negative').hide().slideToggle(200)}else{$('.nav-negative').slideToggle(200)}
$("html, body").animate({scrollTop:0},200);return!1});$('#mailer-subscribe-form input.charset').val(document.charset||document.characterSet);$('#mailer-subscribe-form').submit(function(){var form=$(this);var email_input=form.find('input[name="email"]');var email_submit=form.find('input[type="submit"]');if(!email_input.val()){email_input.addClass('error');return!1}else{email_input.removeClass('error')}
email_submit.hide();email_input.after('<i class="icon16 loading"></i>');$('#mailer-subscribe-iframe').load(function(){$('#mailer-subscribe-form').hide();$('#mailer-subscribe-iframe').hide();$('#mailer-subscribe-thankyou').show()})});if(MatchMedia("only screen and (max-width: 1000px)")){$('.pop_brands .category-name').click(function(){$('.pop_brands .brands').slideToggle()})}
if(MatchMedia("only screen and (max-width: 880px)")){$('.category_menu .level1 a').click(function(){$(this).closest('div').hover();return!1});$('.top_buttons .info').click(function(){if($('button.menu').is('.open')){$('button.menu').click()}
$('body').toggleClass('open_menu');$(this).toggleClass('open');$('.mobile_info_menu').toggleClass('open')});$(".mobile_info_menu").swipe({swipeLeft:function(){$('.top_buttons .info').click()},allowPageScroll:"vertical"});$(".filters").swipe({swipeLeft:function(){$('.filter_button').click()},allowPageScroll:"vertical"})}
if(MatchMedia("only screen and (max-width: 640px)")){$('.category_menu .level1 .ch a').click(function(){var cid=$(this).parent().attr('class').replace('active','').replace('ch','').replace(' ','');$('.category_menu .level1 > div').removeClass('active');$(this).parent().addClass('active');$('.category_menu .level2 > div').removeClass('show');$('.category_menu .level2 .'+cid).addClass('show');$('.category_menu .level1, .category_menu .level2').addClass('go_left');return!1});$('.category_menu .level2 div a.parrent_link span').click(function(){$('.category_menu .level1, .category_menu .level2').removeClass('go_left');setTimeout(function(){$('.level1 div, .level2 div').removeClass('active').removeClass('show')},300)
return!1});$(".category_menu").swipe({swipeLeft:function(){$('button.menu').click()},swipeRight:function(){if($('.level2').is('.go_left')){$('.category_menu .level2 .show a.parrent_link span').click()}},allowPageScroll:"vertical"})}})