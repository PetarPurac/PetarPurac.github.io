const popupBtnF = document.querySelector('.popupFSS');
const popupBtnH = document.querySelector('.popupHAC');
const popupF = document.querySelector('.popupF')
const popupH = document.querySelector('.popupH')
const popupFClose = document.querySelector('.popupF__close')

popupBtnF?.addEventListener('click', () => {
    popupF.classList.add('popupF--active')
    document.body.style.overflow = 'hidden';
    console.log(true);
})

popupF?.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('popupF__wrap') || target.classList.contains('popupF__img')) {
        return;
    } else {
        popupF.classList.remove('popupF--active')
        document.body.style.overflow = 'visible';
    }
})

popupBtnH?.addEventListener('click', () => {
    popupH.classList.add('popupH--active')
    document.body.style.overflow = 'hidden';
})

popupH?.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('popupH__wrap') || target.classList.contains('popupH__img')) {
        return;
    } else {
        popupH.classList.remove('popupH--active')
        document.body.style.overflow = 'visible';
    }
})


const  exitPopup = () => {    
    document?.addEventListener('keydown', (event) => {
        
        if (event.key === 'Escape') {
         //if esc key was not pressed in combination with ctrl or alt or shift
            popupF.classList.remove('popupF--active')
            popupH.classList.remove('popupH--active')
         document.body.style.overflow = 'visible';
        }
    });
}
exitPopup();


