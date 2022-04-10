var maximages = 5;
var startpath = "pix3/birds"
var extension = ".png"

function showbig(pic) {
    document.getElementById("bigpic").src = pic;
}

function calcslide(x) {
    var currentimage = document.getElementById("bigpic").src;
  
    var path = "pix3/birds" + z + ".png";
    var z = '0' + x;
   
    var dotat = currentimage.indexOf(extension);
    var stringnumber = currentimage.substr(dotat -2, 2);
    var nextnum = parseInt(stringnumber) + x;

    if (nextnum < 1) {
        nextnum = maximages;
    }

    if (nextnum > maximages) {
        nextnum = 1;
    }

    var twodigitnum = ('0' + nextnum).slice(-2);
    var showimg = startpath + twodigitnum + extension;

    showbig(showimg);
}