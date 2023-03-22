const red = document.getElementById("red");
red.addEventListener(
  "click",
  () => {
      const container1 = document.querySelector('.containerContenu');
      const container2 = document.querySelector('.containerContenu2');
      console.log("Red");
      // container1.classList.remove('blue');
      container1.classList.add('red');
      
      // container2.classList.remove('blue');
      container2.classList.add('red');
      })


const blue = document.getElementById("blue");
blue.addEventListener(
    "click",
    () => {
        const container1 = document.querySelector('.containerContenu');
        const container2 = document.querySelector('.containerContenu2');
      
        // container1.classList.remove('red');
        container1.classList.add('blue');
      
        // container2.classList.remove('red');
        container2.classList.add('blue');
      })
