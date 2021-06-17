const btn = document.querySelector('.btn')

const answers = document.querySelectorAll('.answers')

for(let i = 0; i<answers.length; i++){
    answers[i].addEventListener('click', check)
    function check() {
        if(answers[i].dataset.right === 'right'){
            answers[i].classList.add('true')
            return
        }else{
            answers[i].classList.add('fals')
            return
        }
    }
}

btn.addEventListener('click', ()=>{window.location.reload()})


