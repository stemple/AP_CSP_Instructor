function toHex(d) {
    var r = d % 16;
    var result;
    if (d - r == 0) {
        result = toChar(r);
    }
    else {
        result = toHex((d - r) / 16) + toChar(r);
    }
    return result;
}

function toChar(n) {
    const alpha = "0123456789ABCDEF";
    return alpha.charAt(n);
}

function jsEncode(s, k) {
    var enc = "";
    var str = "";
    // make sure that input is string
    str = s.toString();
    for (var i = 0; i < s.length; i++) {
        // create block
        var a = s.charCodeAt(i);
        // bitwise XOR
        var b = a ^ k;
        enc = enc + String.fromCharCode(b);
    }
    return enc;
}

function createASCIITable {
    var cols = 8;
    var rows = 32;
    var table = "<table border=0 cellspacing=0 class=data><tr>";
    for (var i = 0; i < cols; i++) table = table + "<th>Dec</th><th>Hex</th><th>Char</th>";
    dw("</tr>");
    for (var j = 0; j < rows; j++) {
        dw("<tr>");
        for (var i = 0; i < cols; i++) {
            var n = i * rows + j;
            dw("<td class=a>" + n + "</td><td class=b>" + n.toString(16).toUpperCase() + "</td><td class=c>&#" + n + ";</td>");
        }
        dw("</tr>");
    }
    for (var i = 0; i < cols; i++) dw("<th>Dec</th><th>Hex</th><th>Char</th>");
    dw("</table>");
}
