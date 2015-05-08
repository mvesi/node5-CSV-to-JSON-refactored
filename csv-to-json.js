var fs = require('fs');
var _ = require('underscore');

// set the command line inputs to variables so they are accessible
var inputFileName = process.argv[2];
var outputFileName = process.argv[3];


var csvToJson = function(){
    // read the csv file into the file system
    fs.readFile(inputFileName, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      // split return string by carriage return
     var csvArr = data.split('\n');
     var multiArr = [];

     // create a comma sep array from each array in csvArr and push into multiArr
     for(var i=0 ; i<csvArr.length ; i++){
         multiArr.push(csvArr[i].split(','));
     }

     // make 2 arrays from multi - one with the titles and the other with remaining data
     var keyArr = multiArr.splice(0,1);
     var valueArr = multiArr.splice(0,multiArr.length);

     // use underscore object method to create an object out of keyArr as kets & valueArr as values
     var jsonData = [];
     for (var i=0 ; i<valueArr.length ; i++){
         jsonData.push(_.object(keyArr[0], valueArr[i]));
     }

     // Write the data into a stringified JSON file
     fs.writeFile(outputFileName, JSON.stringify(jsonData), function (err) {
       if (err) throw err;
       console.log('It\'s created!');
     });

    });


};

csvToJson();




