let h1=document.querySelector("h1");


function newcolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h1.style.color=color;
            resolve("color changed")
        }, delay);
    })
}

async function rndmColor(){
    await newcolor("red",1000);
    await newcolor("yellow",2000);
    await newcolor("lightblue",3000)
    await newcolor("red",1000);
    await newcolor("yellow",2000);
    await newcolor("lightblue",3000)
}
rndmColor();