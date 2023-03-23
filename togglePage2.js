const red = document.querySelector(`.toggleLi:nth-child(2)`);
red.addEventListener(
  "click",
  () => {
    const container1 = document.querySelector('.containerContenu');
    const container2 = document.querySelector('.containerContenu2');
    console.log("Red");
    container1.classList.remove('blue');
    container1.classList.add('red');
    //   container1.style.display = "none"
    //   container2.style.display = "block"
    container2.classList.remove('blue');
    container2.classList.add('red');
})

const blue = document.querySelector(`.toggleLi:nth-child(1)`);
blue.addEventListener(
    "click",
    () => {
    const container1 = document.querySelector('.containerContenu');
    const container2 = document.querySelector('.containerContenu2');
              
    container1.classList.remove('red');
    container1.classList.add('blue');
    //   container2.style.display = "none"
    container2.classList.remove('red');
    container2.classList.add('blue');
})

      
    