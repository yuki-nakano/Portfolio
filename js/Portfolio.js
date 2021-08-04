const textures = 
[
    "../res/product1/sibaku.png",
    "../res/product1/sibaku_1.png",
    "../res/product1/sibaku_2.png",
]
const maxnum = 3;
let num = -1;

function slide_time()
{
    num++;
    num %= maxnum;

    document.getElementById("slide_sibaku").src = textures[num];
}
setInterval(slide_time, 2000);