({
    baseUrl: "",
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
    },
    name: "main-media",
    out: "prod/main-media-built.js"
})