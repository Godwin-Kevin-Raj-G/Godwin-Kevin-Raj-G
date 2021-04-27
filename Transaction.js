function addone() {
    document.getElementById("val").value = Number(document.getElementById("val").value) +
        Number(document.getElementById("kevin").value)

    var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    function dateFormat2(d) {
        var t = new Date(d);
        return t.getDate() + ' ' + monthShortNames[t.getMonth()] + " " + t.getFullYear();
    }

    // document.getElementById("date").innerHTML = dateFormat2(new Date())

    var table = document.getElementById("tab1");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    cell1.innerHTML = dateFormat2(new Date())

    var cell2 = row.insertCell(1)
    cell2.innerHTML = " DEPOSITED Transaction @upi-vicky"

    var cell3 = row.insertCell(2)
    cell3.innerHTML = document.getElementById("val").value


}

// reduction

function minusOne() {
    document.getElementById("val").value = Number(document.getElementById("val").value) -
        Number(document.getElementById("buy1").value)


    var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    function dateFormat2(d) {
        var t = new Date(d);
        return t.getDate() + ' ' + monthShortNames[t.getMonth()] + " " + t.getFullYear();
    }

    // document.getElementById("date").innerHTML = dateFormat2(new Date())

    var table = document.getElementById("tab1");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    cell1.innerHTML = dateFormat2(new Date())

    var cell2 = row.insertCell(1)
    cell2.innerHTML = " WITHDRAW Transaction @upi-Manu"

    var cell3 = row.insertCell(2)
    cell3.innerHTML = document.getElementById("val").value
}