var pos = 0;
const pacArray = [
    ['images/PacMan1.png', 'images/PacMan2.png'],
    ['images/PacMan3.png', 'images/PacMan4.png']
];
var direction = 0;
var focus = 0;

function Run() {
    let img = document.getElementById("PacMan");
    let imgWidth = img.width;
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth);
    img.src = pacArray[direction][focus];
    if (direction) {
        pos -= 20;
        img.style.left = pos + "px";
    } else {
        pos += 20;
        img.style.left = pos + 'px';
    }
    // Use setTimeout to call Run every 200 millesecs
    
}
setInterval('Run()',100);
function checkPageBounds(direction, imgWidth) {
    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    if (pos + 200 >= canvas.width || pos < 0) {
        direction = (direction + 1) % 2;
    }
    //
    // Complete this to reverse direction on hitting page bounds
    // 
    return direction;
}