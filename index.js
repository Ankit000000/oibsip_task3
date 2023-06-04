var inputbox = document.getElementById("inputbox");
var addbutton = document.getElementById("addbutton");
var incomplete_task = document.getElementById("incomplete_task");
var completed_task = document.getElementById("completed_task"); 

addbutton.addEventListener('click', f => {
    var p1 = document.createElement('p');
    p1.innerText = inputbox.value;
    console.log(p1);
    incomplete_task.appendChild(p1);
    inputbox.value = "";

    p1.addEventListener('click', a => {
        var g = p1;
        incomplete_task.removeChild(p1);
        completed_task.appendChild(g);
    })

    p1.addEventListener('dblclick', z => {
        completed_task.removeChild(p1);
    })
})