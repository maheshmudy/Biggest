function biggest() {
    var n1 = document.getElementById("number-1").value;
    var n2 = document.getElementById("number-2").value;
    var n3 = document.getElementById("number-3").value;
    var big;
    if (n1 > n2) {
        big = n1;
    }
    else {
        big = n2;
    }
    if (big > n3) {
        document.getElementById("result").innerHTML = "Biggest Number Is :" + big;
    }
    else {
        big = n3;
        document.getElementById("result").innerHTML = "Biggest Number Is :" + big;
    }
    document.getElementById("result").style.color = "red";
}  