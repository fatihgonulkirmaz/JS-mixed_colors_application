const text = document.getElementById('text');
const button = document.getElementById('button');

const codeArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


const randomColorCode = () => {
    let hexCode = '#'
    for (let x = 0; x < 6; x++) {
      hexCode += codeArray[Math.floor(Math.random() * codeArray.length)]  
    }
    return hexCode
}

button.addEventListener('click',() => {
    const colorCode = randomColorCode()
    text.innerText = colorCode
    document.body.style.backgroundColor = colorCode
})