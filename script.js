let BtnNo = document.getElementById("BtnNo")
let BtnYes = document.getElementById("BtnYes")

BtnNo.onmousemove=()=>{
    let width = window.innerWidth
    let height = window.innerHeight
    
    let randomX = Math.floor(Math.random() * (width - 100))
    let randomY = Math.floor(Math.random() * (height - 100))

    BtnNo.style.left = `${randomX}px`
    BtnNo.style.top = `${randomY}px`
}

BtnYes.onclick=()=>{
    let image = document.getElementById("image")
    let imageChange = "https://media.tenor.com/fh-iaBZadMUAAAAM/kiss.gif"
    image.src = imageChange
}

