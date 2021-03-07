//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;
var answers = [];

function check(param00, param1, param2, param0) {
    do {
        ok = false;
        event = +prompt(param00 + param1 + param2 + '-1 - Выход из игры');

        if (event == -1) {
            break;
        } 
        else {
            ok = isAnswer(param0, event);
        }
    }
    while(!ok);
}

function checkAnswer(x1, x2) {
    switch (event) {
        case 1: 
            answers.push(x1);
            check(works.d00, works.d1, works.d2, works.d0);
            break;
        case 2: 
            answers.push(x2);
            check(works.d00, works.d1, works.d2, works.d0);
            break;
        case -1: // Второе действие
            break;
        default:
            alert('Ошибка');
    }
    if (event == 1) {
        answers.push(works.d1);
    }
    else if (event == 2) {
        answers.push(works.d2);
    }
}

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

check(works.a00, works.a1, works.a2, works.a0);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        answers.push(works.a1);
        check(works.b00, works.b1, works.b2, works.b0);
        checkAnswer(works.b1, works.b2);
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        answers.push(works.a2);
        check(works.c00, works.c1, works.c2, works.c0);
        answers.push(event);
        checkAnswer(works.c1, works.c2);
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

//------------------------------------------

alert(answers.join(""));

