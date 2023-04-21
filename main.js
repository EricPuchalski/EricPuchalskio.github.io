let changeColor = document.getElementById('changeColor')
let encrypt = document.getElementById('encrypt')
let containerText = document.getElementById('container-text')
let containerImg = document.getElementById('container-img')
let textResult = document.getElementById('textResult')
let textArea = document.getElementById('textArea')
let decrypt = document.getElementById('decrypt')
let clear = document.getElementById('clear')
let copy = document.getElementById('copy')
const colors = ["#030d4d", "#677af0", '#5346b8', '#50187a', '#571e63', '#7b3dcc', "#584078"]
let i=0;
let printed;
let newPrinted = "";

const intervalo = () => setInterval(()=> {
    (i<colors.length)?i++: i=0
    changeColor.style.color = colors[i]
},500)

intervalo()


// =========================================================================================//
clear.addEventListener('click', (e)=>{
    textResult.value = " "
    textArea.value = " "
   copy.value = "Copiar"
   containerImg.classList.remove('hidden')
   containerText.classList.remove('show')
})
textArea.addEventListener("click", e =>{
    textArea.placeholder = ""

})
textArea.addEventListener("mouseleave", e =>{
    textArea.placeholder = "Ingrese el texto aquí"
})
encrypt.addEventListener('click', (e)=>{
    copy.value = "Copiar"
        containerText.classList.add('show')
        containerImg.classList.add('hidden')
        printed = textArea.value.split('')
        for (const letter in printed) {
            if (printed[letter]=='a') {
                newPrinted+='ai'
            }
            else if (printed[letter]==='e') {
                newPrinted+='enter'
            }
            else if (printed[letter]==='i') {
                newPrinted+='imes'
            }
            else if (printed[letter]==='o') {
                newPrinted+='ober'
            }
            else if (printed[letter]==='u') {
                newPrinted+='ufat'
            } else {
                newPrinted+= printed[letter]
            }
        }
        textResult.value = newPrinted
        newPrinted = " "
    })

decrypt.addEventListener('click', (e)=>{
    copy.value = "Copiar"
    textArea.value !== "" 
        containerText.classList.add('show')
        containerImg.classList.add('hidden')
        printed = textArea.value
        newPrinted = printed.replaceAll('ai', 'a') 
        newPrinted = newPrinted.replaceAll('enter', 'e')
        newPrinted = newPrinted.replaceAll('imes', 'i')
        newPrinted = newPrinted.replaceAll('ober', 'o')
        newPrinted = newPrinted.replaceAll('ufat', 'u')
        textResult.value = newPrinted
        newPrinted = " "
})

copy.addEventListener('click', ()=>{
    navigator.clipboard.writeText(textResult.value)
    copy.value = "Copiado"
})