const cell = document.querySelectorAll('.cell');

cell.forEach((el, idx) => {

    let numPool = [1, 2, 3, 4, 5];
    let rand = numPool[Math.floor(Math.random() * numPool.length)];

    if ( rand === 1 ) {
        return;
    } else if ( rand === 2 ) {
        el.classList.add('rotation90');
    } else if ( rand === 3 ) {
        el.classList.add('rotation180');
    } else if ( rand === 4 ) {
        el.classList.add('rotation270');
    } else if ( rand === 5 ) {
        el.classList.add('rotation360');
    };

    el.addEventListener('click', () => {
        if (el.classList.contains('rotation90') === true) {
            el.classList.remove('rotation90');
            el.classList.add('rotation180');
        } else if (el.classList.contains('rotation180') === true) {
            el.classList.remove('rotation180');
            el.classList.add('rotation270');
        } else if (el.classList.contains('rotation270') === true) {
            el.classList.remove('rotation270');
            el.classList.add('rotation360');
        } else if (el.classList.contains('rotation360') === true) {
            el.classList.remove('rotation360');
            el.classList.add('rotation90');
        } else {
            el.classList.add('rotation90');
        }
    });
});


