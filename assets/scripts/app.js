const labelForRadio = document.querySelectorAll('.feedback-card .box-label label')

labelForRadio.forEach((label)=>{
    if(label.checked){
        console.log('label foi selecionada')
    }
})


/*
labelForRadio.forEach((label)=>{
    label.addEventListener('click',()=>{
        
        label.classList.add('selected-radio-feedback') 

    })
    
})

*/



