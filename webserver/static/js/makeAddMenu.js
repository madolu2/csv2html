let btn_menu = document.querySelector("#btn_add"),
    table = document.querySelector("tbody"),
    btn_add = document.querySelector(".add"),
    btn_cancel = document.querySelector(".cancel"),
    hidden = document.querySelector(".hide"),
    add_menu = document.querySelector(".add_menu"),
    headers = document.querySelectorAll("th"),
    second_record = document.querySelector("tr").nextSibling,
    input_size = 100 / headers.length,
    new_record = "",
    inputs = document.querySelectorAll("input"),
    rows = document.querySelectorAll("tr");

// there's so much cancer that i want to die
headers.forEach((row) => {
    if (inputs.length == 0){
        inputs = []; 
        input = add_menu.appendChild(document.createElement("input"));
        input.style.width = input_size + "%";
        input.placeholder = row.innerHTML;
        inputs.push()
        }
    });

inputs.forEach((item) => {
    item.addEventListener("click", (input) => {
        input.target.style.backgroundColor = "";
    })
})

btn_menu.addEventListener("click", () => {
    hidden.style.display = "flex";
})

btn_add.addEventListener("click", () => {
    inputs.forEach((item) => {
        if (item.value.length < 1) {
            item.style.backgroundColor = "#eb4b4b";
        } else
            new_record += "<td>" + item.value + "</td>";
    })
    new_row = document.createElement("tr");
    new_row.innerHTML = new_record;
    table.insertBefore(new_row, second_record);
})

btn_cancel.addEventListener("click", () => {
    hidden.style.display = "none";
    inputs.forEach((item) => {
        item.value = "";
    })
})

// this is pure cancer, cannot delete this shit rn
rows.forEach((cell)=>{
    cell.addEventListener("click",(target)=>{
    console.log(target.parentNode);
})})

