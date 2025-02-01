let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
let initial_count = 0;
function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    
    let countStr;
    if (initial_count == 0){
      countStr = count; 
    }
    else{
      countStr = " - " + count; 
    }
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    initial_count += 1;
}
