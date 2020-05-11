let btn_menu = document.querySelector("#btn_add"),
    table = document.querySelector("tbody"),
    btn_add = document.querySelector(".add"),
    btn_cancel = document.querySelector(".cancel"),
    hidden = document.querySelector(".hide"),
    add_menu = document.querySelector(".add_menu"),
    headers = document.querySelectorAll("th"),
    input_size = 100 / headers.length,
    new_record = "";

headers.forEach(row =>{
    input = add_menu.appendChild( document.createElement("input"));
    input.style.width = input_size + "%";
    input.placeholder = row.innerHTML;
})

let inputs = document.querySelectorAll("input");

inputs.forEach((item)=>{
    item.addEventListener("click", (input)=>{
        input.target.style.backgroundColor = "";
})})
    
btn_menu.addEventListener("click", ()=>{
    hidden.style.display = "flex";
})

btn_add.addEventListener("click", () =>{
    inputs.forEach((item) =>{
        console.log(item.value.length);
        if (item.value.length < 1){
            item.style.backgroundColor = "red";
        }
        else
            new_record+="<td>" + item.value + "</td>";
    })
    table.appendChild( document.createElement("tr")).innerHTML = new_record;
})

btn_cancel.addEventListener("click", ()=>{
    hidden.style.display = "none";
    inputs.forEach( (item)=>{
        item.value = "";
    })
})