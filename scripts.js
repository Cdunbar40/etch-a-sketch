const body = document.querySelector('body');
body.setAttribute('style','display:flex; justify-content:center;align-items:center; flex-direction:column;');
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
resetBtn.addEventListener('click', resetGrid);
body.appendChild(resetBtn);

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
    pix.addEventListener(
        "mouseover",
        (event) => {
            let r = Math.floor(Math.random()*256);
            let g = Math.floor(Math.random()*256);
            let b = Math.floor(Math.random()*256);
            var curr = getComputedStyle(event.target).getPropertyValue('background-color');
            const regex = /rgba\(.*?,.*?,.*?,\s*([\d.]+)\s*\)/;
            const match = curr.match(regex);
            if (match){
                var alpha = parseFloat(match[1]);
                alpha += .1;
            } else {
                var alpha = 1;
            }
            console.log(alpha);
            event.target.style.backgroundColor=`rgba(${r},${g},${b},${alpha})`;
        });
    sheet.appendChild(pix);
}

body.appendChild(sheet);

function resetGrid() {
    var size = prompt('Please enter your desired grid size (max: 100):');
    
    if(size === null){
        return;
    }
    if(!parseInt(size)){
        size = 16;
    }
    else if(size > 100){
        size = 100;
    }
    console.log(size);
    sheet.innerHTML = '';
    var dim = 960 / size;
    for (var i = 0; i < size * size; i++){
        const pix = document.createElement('div');
        pix.setAttribute('style', `width:${dim}px;
                                height:${dim}px;
                                border:0px; 
                                margin:0px;
                                flex: 0 0 auto;`);
        pix.classList.add('pixel');
        pix.addEventListener(
            "mouseover",
            (event) => {
            let r = Math.floor(Math.random()*256);
            let g = Math.floor(Math.random()*256);
            let b = Math.floor(Math.random()*256);
            var curr = getComputedStyle(event.target).getPropertyValue('background-color');
            const regex = /rgba\(.*?,.*?,.*?,\s*([\d.]+)\s*\)/;
            const match = curr.match(regex);
            if (match){
                var alpha = parseFloat(match[1]);
                alpha += .1;
            } else {
                var alpha = 1;
            }
            console.log(alpha);
            event.target.style.backgroundColor=`rgba(${r},${g},${b},${alpha})`;
            });
        sheet.appendChild(pix);
    }
}
