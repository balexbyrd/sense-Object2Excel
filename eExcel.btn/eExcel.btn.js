var appName;
var objIdE;
var tName;

define( ['jquery','qlik','./js/tipped','css!./css/tipped.css','css!./css/gtStyle.css'],
function ($,qlik,tipped) {
	return {
		definition: {
			type: "items",
			component: "accordion",
			label: "Parameters",
			items: {				
				oID: {
					ref: "props.oID",
					label: "Object ID",
					type: "string",
					defaultValue: "-Enter Object ID-"
				},
				bName: {
					ref: "props.bName",
					label: "Button Name",
					type: "string",
					defaultValue: "-Enter Button Name-"
				},
				tTip: {
					ref: "props.tTip",
					label: "Tooltip",
					type: "string",
					defaultValue: "-Enter tooltip-"
				},
				tName: {
					ref: "props.tName",
					label: "Tab Name",
					type: "string",
					defaultValue: "-Enter a Tab name-"
				}					
			}
		},	
		paint: function ($element,layout) {
			$element.empty();

			var id = layout.qInfo.qId + '_ext';
			var $Create = $( '#' + id );			
			var ext_height = $element.height()-10;
			appName = qlik.currApp().id;		// Current App ID
			objIdE = layout.props.oID;			// Object ID to show
			var bName = layout.props.bName;			// Button Name
			var tTip = layout.props.tTip; 			// Tooltip
			var tName = layout.props.tName; 		// Tab name

			$Create = $( document.createElement( 'div' ) );
			$Create.attr( 'id', id );			
			gid = "oe_"+id;				
			$Create.html( '<button id="'+gid+'" class="button button1" style="height:'+ext_height+'px;" button="submit">'+bName+'</button>' );
			$element.append( $Create );				 

			tipped.create('#'+gid+'', tTip, { position: 'top',fadeIn: 400,fadeOut: 180, size: 'large',behavior: 'hide'});
			
			$('#'+gid).on('click', function() {								 
				window.open(location.origin+'/extensions/eExcel.html/eExcel.html', '_blank');
			});
		}
	};
} );

