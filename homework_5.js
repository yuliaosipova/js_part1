
function getChar (x) {
    var char;
    switch (x) {
        case 1: 
            char = "a";
            break;
        case 2:
            char = "b";
            break;
        case 3:
            char = "c";
            break;
        case 4:
            char = "d";
            break;
        case 5:
            char = "e";
            break;
        case 6:
            char = "f";
            break;
        case 7:
            char = "g";
            break;
        case 8:
            char = "h";
            break;
    }
    return char;
}

var table = document.createElement("table");
var td, tr, i, j;

for (i = 0; i < 10; i++) {
    tr = document.createElement("tr");
    table.append(tr);
    tr.style.height = "50px";

    for(j = 0; j < 10; j++) {
        td = document.createElement("td");
        td.style.width = "50px";
        td.style.textAlign = "center";
        tr.append(td);
        if (i != 0 && i != 9 && j != 0 && j != 9) {
            td.style.border = "1px solid black";
            td.style.padding = "0";
            td.style.fontSize = "40px";
            if ((i % 2 == 1 && j % 2 == 0) || (i % 2 ==0 && j % 2 ==1)) {
                td.style.background = "chocolate";
            }
            else {
                td.style.background = "palegoldenrod";
            }
        }
        else {
            if((j == 0 || j == 9) && i > 0 && i < 9) {
                td.innerText = "" + (i - 9)* (-1);
            }
            if((i == 0 || i == 9) && j > 0 && j < 9) {
                td.innerText = getChar(j);
            }
        }
        if (j == 9 || i == 0) {
            td.style.transform = "rotate(180deg)";
        }
        if (i == 2 && j > 0 && j < 9) {
            td.innerHTML = "&#9817;";
            td.style.color = "white";
        }
        if (i == 7 && j > 0 && j < 9) {
            td.innerHTML = "&#9817;";
            td.style.color = "black";
        }
        if (i == 1) {
            td.style.color = "white";
            if (j == 1 || j == 8) {
                td.innerHTML = "&#9814;";
            }
            if (j == 2 || j == 7) {
                td.innerHTML = "&#9816;";
            }
            if (j == 3 || j == 6) {
                td.innerHTML = "&#9815;";
            }
            if (j == 4) {
                td.innerHTML = "&#9812;";
            }
            if (j == 5) {
                td.innerHTML = "&#9813;";
            }
        }
        if (i == 8) {
            td.style.color = "black";
            if (j == 1 || j == 8) {
                td.innerHTML = "&#9814;";
            }
            if (j == 2 || j == 7) {
                td.innerHTML = "&#9816;";
            }
            if (j == 3 || j == 6) {
                td.innerHTML = "&#9815;";
            }
            if (j == 4) {
                td.innerHTML = "&#9812;";
            }
            if (j == 5) {
                td.innerHTML = "&#9813;";
            }
        }
    }
}

table.style.borderSpacing = "0";
document.querySelector("div").append(table);