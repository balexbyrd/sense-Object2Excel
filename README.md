# sense-oObject
Automatically export any Qlik Sense object to excel, hidden or visible!

![Screenshot](https://raw.githubusercontent.com/balexbyrd/img/master/eObjectExcel.PNG)
![Screenshot](https://raw.githubusercontent.com/balexbyrd/img/master/eObjectExcel_buttons.PNG)

## Installation

1. Move eExcel.html and eExcel.html to the default extension folder in Qlik Sense
2. Open Qlik Sense and add eExcel.html extension to a sheet
3. Configure properties (Object ID, New Window URL, Button Name, Tooltip, Tab Name)

	* **Object ID** - each object added to a Qlik Sense sheet has an object ID. This object is what shows in the tab that's created
	* **New Window URL** - if using Qlik Sense Desktop, the URL will be http://localhost:4848/extensions/eExcel.html/eExcel.html . Replace localhost:4848 if on Qlik Sense server
	* **Button Name** - the name of the button in the UI
	* **Tooltip** - text that pops up in the tooltip when a user scrolls over the button.
	* **Tab Name** - what's is shown in the tab name when the new tab is created.

> **Pro Tip:** Create your object in the UI > Find Object ID and add to oObject > Add object to master library > Remove object from UI. Now you can access hidden or large visuals in new tabs! 
	
## Usage

When the button is pressed, Qlik Sense generates the excel file using the object ID and downloads the excel file to the users default download folder.

Behind the scenes, the application name/hash is passed from parent tab to child tab during the process in order to open the websocket connection > authenticate > open the app > generates the excel files > downloads the file.

## Limitations

I've tested this in Qlik Sense 2.1.1 and Qlik Sense 2.2.3 and it works in Google Chrome. 

The exportData method in Qlik Sense is a magical function that I believe still has room for improvement. Large volumes of data have been known to be difficult to push to an excel file. For example, there's 1 million rows over 15 columns that I want to export. It'll export the file without an error, but only 100K rows will show up :( I think this will be updated in future versions, just keep this in mind.

### If using this from Qlik Sense Desktop, you must navigate to the application in a browser http://localhost:4848/hub/ in order for this to work.

### You must allow pop-ups in your browser

## License

MIT

Free to use but keep me on your Christmas list :D
