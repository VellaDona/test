const moreStylesP = document.querySelector(".moreStyles");
const addingStylesBtn = document.querySelector(".addStyles");

addingStylesBtn.addEventListener('click', () => {

    if (moreStylesP.classList.contains('active')) {
        moreStylesP.classList.remove('active');

        moreStylesP.style.color = 'green';
        moreStylesP.style.fontStyle = 'italic';
        moreStylesP.style.textDecoration = '';
        moreStylesP.style.backgroundColor = '';
        moreStylesP.innerText = `We changed styles`.toLowerCase();
    } else {
        moreStylesP.classList.add('active');

        moreStylesP.style.color = 'yellow';
        moreStylesP.style.backgroundColor = 'black'
        moreStylesP.style.fontWeight = 'bold';
        moreStylesP.style.textDecoration = 'underline';
        moreStylesP.innerText = `Styles of class .active`.toUpperCase();
    }
});
