$('title').html(window.tName);
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in dev-hub: you can remove this when you have added an app
var app;

require.config( {
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	var app = qlik.openApp(window.appName, config); 
	app.getObject('QV01',window.obId).then( function( vizModel ) {	 
		vizModel.exportData().then(function( reply ) {  
			window.open(reply.result.qUrl);
			window.close();
			app = 0;
		});  
	});
} );

