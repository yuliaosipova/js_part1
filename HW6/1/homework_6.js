function imgError() {
    alert('Соответствующая картинка не найдена!');
}

function f(x) {
    var directory = x.src.replace('small', 'big');
    console.log(directory);
    var imgBig = document.getElementById('imgBig');
    imgBig.src = directory;
}
