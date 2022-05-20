const box = document.querySelector('.kotak');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'color';

    if(box.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    box.classList.toggle(satu);

    setTimeout(() => {
        box.classList.toggle(dua);
    }, 1000);
})