document.addEventListener('click', (e) =>{ //e for event
    let cardClassList = e.target.parentNode.classList
    if(cardClassList.length > 1 && cardcardClassList[1].includes('cpu')) {
        if(flip === false && playerSelect.length !=0){
            cardClassList.toggle('is-not-flipped')
            cardClassList.toggle('is-flipped')
            flip = true
        }
    }
})