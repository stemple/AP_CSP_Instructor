function timesTable(row, column) {
    var table = "<table>"
    for(var i = 1; i <= row; i++) {
        table = table + "<tr>";
        for(var j = column; j >= 1; j--){
            table = table + "<td>" + i*j + "</td>";
        }
        table = table + "</tr>";
    }
    table = table + "</table>";
    return table;
}
