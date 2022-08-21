function fun1(){
  let txtarea = document.getElementById('txtarea')
   txtarea.style.fontWeight = "bold";
}

function fun2(){
    let txtarea = document.getElementById('txtarea')
   txtarea.style.fontStyle = "italic";

}

function fun3(){
    let txtarea = document.getElementById('txtarea')
   txtarea.style.color = "blue";
}
function fun4(){
    let txtarea = document.getElementById('txtarea')
   txtarea.style.textTransform = "uppercase";
}
function fun5(){
    let txtarea = document.getElementById('txtarea')
   txtarea.style.textTransform = "lowercase";
}
function finitial(){
    document.getElementById('txtarea').style.fontWeight = "normal";
    document.getElementById('txtarea').style.textTransform = "capitalize";
    document.getElementById('txtarea').style.color = "black";
    document.getElementById('txtarea').value = "";
}


function dnldfile(filename ,content){
    let element = document.createElement('a');
    element.setAttribute('href' ,filURL);
    element.setAttribute('download',filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
}
window.onload =function fun11(){
    document.getElementById('download').addEventListener('click' ,function fun10(){
        const filename = document.getElementById('filename').value;
        const content = document.getElementById('text').value;
        if (filename && content){
            downloadfile(filename , content);
        }
    })

}



