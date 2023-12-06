let messageParaContainer = document.getElementsByClassName("showMessageContainer")[0];
let showMessagePara = document.getElementById("showMessage");
let showMessage;

function inputFunc(event){
    // console.log(event.target.id)
    // event.target = `<p>${event.target.value}</p>`;
    messageParaContainer.style.visibility = "visible";
    showMessagePara.style.visibility = "visible";    
    showMessagePara.innerHTML = "Copied !";

    event.target.title = "";
    event.target.parentNode.children[1].style.visibility = "visible";
    setTimeout(()=>{
        event.target.parentNode.children[1].style.visibility = "hidden";
        messageParaContainer.style.visibility = "hidden";
        showMessagePara.style.visibility = "hidden";
    },500);

    // document.getElementById(event.target.id).innerHTML = `<p>${event.target.value}</p>`;
    // document.getElementsByClassName("text-1")[0].value = `<p>${event.target.value}</p>`;
    // event.target.value = `<p>${event.target.value}</p>`;
}
{/* <input type="textbox" id="confirmEmail" onselectstart="return false" onpaste="return false;" oncopy="return false" oncut="return false" ondrag="return false" ondrop="return false" autocomplete="off"> */}









//_______________ Added e.trigger.blur(); in below code at line 4356 in index.html page _______________\\

// var clipboard = new ClipboardJS('.copybutton');
// clipboard.on('success', function(e) {
    // console.log(e);  //new code added
//     e.trigger.blur();
// })
// clipboard.on('error', function(e) {
//     console.log(e);
// });