{
    const init = () => {
        document.addEventListener(`DOMContentLoaded`, function(){
            const $snoep = document.querySelectorAll(`.snoep`);
            $snoep.forEach(function(snoep){
                snoep.addEventListener(`click`, (e) => {
                    rating(e);
                    textmaker(e);
                }); 
            });
            const arrayNum = parseInt(document.querySelector(`.snoepjes`).getAttribute(`data-rating`));
            const target = $snoep[arrayNum - 1];
            target.dispatchEvent(new MouseEvent(`click`));
        });
    }
    const rating = (e) => {
        const span = e.currentTarget;
        const $snoepjes = document.querySelectorAll(`.snoep`);
        let juist = false;
        let num = 0;
        $snoepjes.forEach(function(snoepje, index){
            if(juist){
                snoepje.classList.remove(`vol`);
            }else{
                snoepje.classList.add(`vol`);
            }

            if(snoepje === span){
                juist = true;
                num = index + 1;
            }
        });
        document.querySelector(`.snoepjes`).setAttribute(`data-rating`, num);
    }

    const textmaker = (e) => {
        let num = e.composedPath()[0].id;
        const $text = document.querySelector(`.text__rating`);
        switch (num) {
            case `1`:
                $text.innerHTML = `Zeer slecht`;
                break;
            case `2`: 
                $text.innerHTML = `Slecht`;
                break;
            case `3`:
                $text.innerHTML = `Goed`;
                break;
            case `4`: 
                $text.innerHTML = `Zeer goed`;
                break;
            case `5`:
                $text.innerHTML = 'Uitstekend';
                break;
        }
    };
    init();
}