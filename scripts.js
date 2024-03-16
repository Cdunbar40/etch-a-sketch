const body = document.querySelector('body');
body.setAttribute('style','display:flex; justify-content:center;align-items:center;');
const sheet = document.createElement('div');
sheet.setAttribute("style",`background-color: lightgrey;
                    width: 960px;
                    height: 960px;
                    padding: 0px;
                    display: flex;
                    flex-wrap:wrap;
                    `);

for (var i = 0; i < 16*16; i++){
    const pix = document.createElement('div');
    pix.setAttribute('style', `width:60px;
                            height:60px;
                            border:0px; 
                            margin:0px;
                            flex: 0 0 auto;`);
    pix.classList.add('pixel');
    sheet.appendChild(pix);
}


body.appendChild(sheet);
const test = document.querySelector('.pixel');
test.addEventListener(
    "mouseenter",
    (event) => {
      // highlight the mouseover target
      test.setAttribute('style', 'background-color:orange;');
      console.log('fired');
      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.color = "";
      }, 500);
    },
    false,
  );