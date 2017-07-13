// Read A Excel File
var xls = require('excel');

// For Writing To Json File
var jsonfile = require('jsonfile');
var file = './converted_Json_File/data.json';
//var JsonObj ;
//var obj = {name: 'JP'};
var json = require("./converted_Json_File/schema.json");

var parser = require("json-schema-parser");



	
// Read A Excel File And Add Json to data.json located at same directory
xls('tasks.xlsx', function(err,data) {
    if(err) throw err;
	//console.log(data)
	// Map Json Object To avoid add scape string
	var objMap = {"data" : convertToJSON(data)};
	
	// Write A json File 
    // jsonfile.writeFile(file, objMap, {spaces: 2}, function(err) {
	  // console.error(err)
	// })
	

	jsonfile.writeFile(file, objMap, function(err) {
		if(err == null){
			//console.log('Conversion Done !!!!')
		}else{
			//console.error(err)
		}
	})
	
});


function convertToJSON(array) {
	//console.log(array)
  var first = array[3].join();
  
  var headers = first.split(',');
  //console.log(headers)
  var jsonData = [];
  
  var tempData = [];
  
  // for (var z = 0; z < array[8][3].split('|').length; z++ )
  // {
	   // //tempData.push();
	   // tempData.push(array[8][3].split('|')[z]);
  // }
  // var temparr1 = []
  // temparr1.push(tempData.join())
	// console.log(temparr1)
	
	
	// var range = [];
	// for (var i = 0; i < dateArray.length; i ++ ) {
		// range.push({ date: dateArray[i].toString() })
	// }


  
  for ( var i = 4, length = array.length; i < length; i++ )
	{
		var myRow = array[i].join();
		//console.log(myRow)
		var row = myRow.split(',');
		
		var data = {};
		
		for ( var x = 0; x < row.length; x++ )
		{
			
			if(headers[x] != ''){
				// if(headers[x] == 'partial_filled'){
					// var partial_filledBool = row[x] ?  false : true;
					// data[headers[x]] = partial_filledBool;
				// }else if(headers[x] == 'full_filled'){
					// var full_filledBool = row[x] ?  false : true;
					// data[headers[x]] = full_filledBool;
				// }else{
					data[headers[x]] = row[x];
				//}
				
			  
			}
		}
		jsonData.push(data);
	}
 //console.log(jsonData)
  return jsonData;
};