const container = document.querySelector('container');
let size = 16;

function destroyGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function generateGrid(length) {
    const side = 500/length;
    //console.log(side);

    for (let i = 0; i < length; i++) {
        
        //Each contains boxes 
        const row = document.createElement('row');
        row.style.height = `${side}px`;

        //Fill up the row with boxes:
        for (let j = 0; j < length; j++) {
            const box = document.createElement('box');
            box.style.width = `${side}px`;
            box.style.height = `${side}px`;
            row.appendChild(box);
        }
        container.appendChild(row); 

    }
    setHover();
}

function turnBlack(e) {
    const box = e.target;
    //console.log(box);
    box.classList.add('black');
}

function erase(e) {
    const box = e.target;
    //console.log(box);
    box.classList.remove('black');
}

function setErase() {
    const boxes = document.querySelectorAll('box');
    boxes.forEach(item => item.removeEventListener("mouseover", turnBlack));
    boxes.forEach(item => item.addEventListener("mouseover", erase));
}

function setHover() {
    const boxes = document.querySelectorAll('box');
    boxes.forEach(item => item.addEventListener("mouseover", turnBlack));
}

function reset() {
    const boxes = document.querySelectorAll('box');
    boxes.forEach(item => item.classList.remove('black'));
}

function resize(dist) {
    size = dist;
    if (size > 0 && size <= 70) {
        destroyGrid();
        generateGrid(size);
    }
}

generateGrid(20);

const resetButton = document.querySelector("#resetButton");
resetButton.onclick = reset;

const eraser = document.querySelector("#eraser");
eraser.onclick = setErase;

const blackButton = document.querySelector("#blackButton");
blackButton.onclick = setHover;


const slider = document.querySelector('.slider');
slider.oninput = () => resize(slider.value);





