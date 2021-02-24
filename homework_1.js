//Задание 1
var tC;
do {
    tC = parseInt(prompt('Введите температуру в градусах по Цельсию: '));
    if (isNaN(tC)) {
        alert('Введите число');
    }
    else {
        break;
    }
} while (true);
alert('Температура в градусах по Фаренгейту :' + ((9 / 5) * tC + 32));

//Задание 2
var admin;
var name = 'Василий';
admin = name;
alert(admin);

//Задание 3 
//1000108
alert(1000 + "108");

//Доп задание 
var a = 1;
var b = 2;
b = a + b;
a = b - a;
b = b - a;
alert ('a = ' + a + '; b = ' + b);