


var fs = require('fs');
module.exports = function (req, res, URL) {
    fs.appendFile('requestURL.txt', URL + ",", function (err) {
        if (err) {

        } else {
            fs.readFile('requestURL.txt', function (err, data) {
                if (err) throw err;
                var stringData = data.toString();
                var splittedData = stringData.split(",");
                fs.writeFile('request.txt', splittedData.length - 1, function (err) {
                    if (err) throw err;

                })
            })
        }
        // data = data * 1;
        // data++;
        // fs.writeFile('request.txt', data, function (err) {
        // if (err) throw err;
        // console.log('Request Saved!', data);
        // res.end();
        // });

    })
    // fs.readFile('request.txt', function (err, data) {
    // req.originalURL();
    // })
}
// var fs = require('fs')
// exports.readTxt = function () {
//     fs.readFile('./request.txt', function read(err, data) {
//         if (err) {
//             throw err;
//         }
//         content = data * 1
//         content++;
//         fs.writeFile('request.txt', content, function (err) {
//             if (err) throw err;
//             console.log('Saved!');
//         });
//         // console.log(content);
//     });
// }