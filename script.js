const item = document.querySelector('.item')
const placeHolder = document.querySelectorAll('.placeholder')

for (const placeHolderElement of placeHolder) {
    placeHolderElement.addEventListener('dragover', (event)=>{
        //Удалить поведение дропа
        event.preventDefault()
    })
    placeHolderElement.addEventListener('dragenter', (event)=>{
        event.target.classList.add('hovered')
    })
    placeHolderElement.addEventListener('dragleave',(event)=>{
        event.target.classList.remove('hovered')
    })
    placeHolderElement.addEventListener('drop',(event)=>{
        event.target.append(item)
        event.target.classList.remove('hovered')
    })
}

item.addEventListener('dragstart', (event)=>{
    event.target.classList.add('hold')
    setTimeout(()=> event.target.classList.add('hide'), 0)


})
item.addEventListener('dragend', (event)=>{
    event.target.classList.remove('hold', 'hide')


})