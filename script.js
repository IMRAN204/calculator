
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let equal = document.querySelector('.btn-equal');
let clear = document.querySelector('.btn-clear');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        screen.value += value;
        // console.log(value);
    })
});

equal.addEventListener('click', function(e){
    // console.log(screen.value);
    if(screen.value === '')
    {
        // console.log('enter value');
        screen.value = 'please enter value';
    }
    else{
        // console.log(screen.value);
        let answer = eval(screen.value);
        screen.value = answer;
    }
});

clear.addEventListener('click', function(e){
    screen.value = '';
});
