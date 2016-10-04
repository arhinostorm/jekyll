/*global require*/
'use strict';
require.config({
    paths: {
        jquery: 'jquery.min',
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
        modernizr: 
        {
            exports: 'Modernizr'
        }
    }
});

require(['jquery','pilot-lib/taster-offsite-panel','modernizr','jscookie'
], function($, Panel, Modernizr, Cookies) {
    
    var panel = new Panel('.taster-offsite-panel');

    $(document).ready(function () 
    {
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
        /*****     SHARING         *****/
        /*******************************/

        /* make popups look a bit nicer than just a new window */
        $('.popup-link').click(function(e) 
        {
            var width  = 575,
                height = 400,
                left   = ($(window).width()  - width)  / 2,
                top    = ($(window).height() - height) / 2,
                url    = this.href,
                opts   = 'status=1' +
                         ',width='  + width  +
                         ',height=' + height +
                         ',top='    + top    +
                         ',left='   + left;

            window.open(url, 'twitter', opts);

            return false;
        });

    });
    
});