
    // var uri = "my test.asp?name=ståle&car=saab";
    // var enc = encodeURI(uri);
    // var dec = decodeURI(enc);
    // var res = "Encoded URI: " + enc + "\n" + "Decoded URI: " + dec;
    // //document.getElementById("demo").innerHTML = res;
    // console.log(res);
    // console.log(dec.toString());
    
    function parseQueryString(query) {
        var obj = {},
            qPos = query.indexOf("?"),
		    tokens = query.substr(qPos + 1).split('&')
		    i = tokens.length - 1;
		if (qPos !== -1 || query.indexOf("=") !== -1) {
			for (; i >= 0; i--) {
				var s = tokens[i].split('=');
				obj[unescape(s[0])] = s.hasOwnProperty(1) ? unescape(s[1]) : null;
			};
		}
		return obj;
    }


/* Demo */

// var queryString = window.location.search;
//var queryString = 'https://www.google.co.uk/search?client=safari&rls=en&q=twitter+newmancunian&ie=UTF-8&oe=UTF-8';
//var queryString = 'https://www.randomweb.com/search?id=safari&name=sudhakar&dept=dev+deploy';

var sampleuri = "my test.asp?name=sudhakar mandal&car=saab";
var enc = encodeURI(sampleuri);
//console.log(enc);

var obj = parseQueryString(enc);
//document.getElementById('result').innerHTML = JSON.stringify(obj);
console.log(obj);
console.log(obj.car);
console.log(obj.name);

