let btn_offer = document.querySelector(".offer"),
    form_offer = document.querySelector(".form"),
    btn_decline = document.querySelector(".decline"),
    new_offer = document.querySelectorAll("input"),
    table = document.querySelector("tbody"),
    tr_values = document.querySelectorAll("tr");

document.querySelectorAll('tr').forEach(element => {
    if (element.id != "main-cells") {
        element.addEventListener('mouseover', () => {
            children = Array.from(element.children)
            children.forEach(element => {
                element.style.backgroundColor = "#ff7878";
            });
        })
        element.addEventListener('mouseout', () => {
            children = Array.from(element.children)
            children.forEach(element => {
                element.style.backgroundColor = "#e4e4e4";
            });
        })
        element.addEventListener('click', (e) => {
            parent = e.target.parentElement
            parent.remove(e.target)
            get_values(tr_values);
        })
    }

});

btn_offer.addEventListener("click", () => {
    form_offer.style.display = "flex";
})

btn_accept.addEventListener("click", () => {
   new_row = table.appendChild(document.createElement("tr"));
   new_row.innerHTML = fill_row_values();
   get_values(tr_values);
})

btn_decline.addEventListener("click", () => {
    form_offer.style.display = "none";
})

function fill_row_values(){
    let string = "";
    for (var i = 0; i<new_offer.length; i++){
        string+="<td>"+ new_offer[i].value +"</td>";
    }
    return string;
}

function get_values(array){
    rows = []
    blocks = []
    th = []
    array.forEach((row)=>{
        for (var i = 0; i < row.cells.length; i++){
            blocks.push(row.cells[i].innerHTML);
        }
        rows.push(blocks);
        blocks = [];
    })
    th = [rows[0]];
    rows.shift()
    table_values = {
        headers_value:th,
        tr_values:rows
    };
}
