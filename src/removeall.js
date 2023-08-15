const buttons = document.querySelectorAll('.nextbutton');
const optioncontainers = document.querySelectorAll('.opt--container');


for(let button of buttons){
    button.addEventListener('click', () => {
        for(let top of optioncontainers){
            if(top.id === button.id){
                top.classList.remove('hidden');
            }
        }
    })
}