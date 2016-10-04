/*global require*/
'use strict';
require.config({
    paths: {
        jquery: 'jquery.min',
        scrollto: 'jquery.scrollTo.min',
        teletype: 'jquery.teletype.min',
        jscookie: 'js.cookie',
        modernizr: 'modernizr-2.8.3.min',
        'pilot-lib/taster-offsite-panel': 'http://www.bbc.co.uk/taster/pilot-lib'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        jscookie: 
        {
            deps: ['jquery'],
            exports: 'Cookies'
        },
        scrollto: 
        {
            deps: ['jquery']
        },
        teletype: 
        {
            deps: ['jquery']
        },
        modernizr: 
        {
            exports: 'Modernizr'
        }
    }
});

require(['jquery','pilot-lib/taster-offsite-panel','modernizr','jscookie','scrollto','teletype'
], function($,Panel,Modernizr, Cookies) {
    
    var panel = new Panel('.taster-offsite-panel');

    $(document).ready(function () 
    {  
        var _viewportWidth = $(window).width(),
       _viewportHeight = $(window).width();
        var items = "ONCE UPON A TWEET";

        $(".typing").teletype( 
        {
          text: "ONCE UPON A TWEET",
          typeDelay: 10,
          cursor: '|',
          delay: 70,
          preserve: true,
          loop: 1
        });

        setTimeout(function()
        {
            $(".hero h2").addClass("show");
        }, 3300);


        /*******************************/
        /*****     COOKIES         *****/
        /*******************************/

        /* show cookie panel if they haven't allowed it */
        if(!Cookies.get('bbccookiesallowed'))
        {
            $(".cookie-warning").slideDown();   
        }

        $(".cookie-ok").click(function(e)
        {
            e.preventDefault();
            $(".cookie-warning").slideUp();
            Cookies.set('bbccookiesallowed', 'true');
        });

        /*******************************/
        /*****     SCROLLING      *****/
        /*******************************/
        if (window.addEventListener)
        {
              window.addEventListener('scroll', onScroll, false);
        }
        else if (window.attachEvent)
        {
            window.attachEvent('scroll', onScroll);
        }

        function onScroll()
        {
            var doc = document.documentElement,
            oldtop = top;
            var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

            /* check if scroll height and compate to each panel to play and rewind animations accordingly */
            var panels = $(".tweet-panel");
            for(var i=1; i <= $(".tweet-panel").length; i++)
            {
                if(top + (_viewportHeight/2) > $("#panel"+i).offset().top)
                {     
                    $(".tweet-panel").removeClass("active");

                    var currentPanel = $(panels[i-1]);
                    currentPanel.addClass("active");       
                }
            }
        }

        $(window).resize(function() 
        {
           _viewportWidth = $(window).width(),
           _viewportHeight = $(window).width();
        });   

        /*******************************/
        /*****     CLICKABLES      *****/
        /*******************************/

        $(".down-btn").click(function(e)
        {
            e.preventDefault();
            var target = $(this).attr('href');
            $("body").scrollTo($(target), 500, {axis: "y"});
        });
    });
});