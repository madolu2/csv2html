let btn_offer = document.querySelector(".offer"),
    btn_accept = document.querySelector('.accept'),
    form_offer = document.querySelector(".form"),
    btn_decline = document.querySelector(".decline"),
    new_offer = document.querySelectorAll("input"),
    table = document.querySelector("tbody"),
    tr_values = document.querySelectorAll("tr");

tr_values.forEach(element => {
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
    if (form_offer.style.display != "grid") {
        form_offer.style.display = "grid";
    } else {
        form_offer.style.display = "none";
    }
})

btn_accept.addEventListener("click", () => {
    new_offer.forEach(element => {
        if (element.value) {
            new_row = table.appendChild(document.createElement("tr"));
            new_row.innerHTML = fill_row_values();
            get_values(tr_values);
            new_offer.forEach(el => {
                el.value = '';
            });
        }
    });
})

btn_decline.addEventListener("click", () => {
    new_offer.forEach(element => {
        element.value = '';
    });
})

function fill_row_values() {
    let string = "";
    for (var i = 0; i < new_offer.length; i++) {
        string += "<td>" + new_offer[i].value + "</td>";
    }
    return string;
}

function get_values(array) {
    rows = []
    blocks = []
    th = []
    array.forEach((row) => {
        for (var i = 0; i < row.cells.length; i++) {
            blocks.push(row.cells[i].innerHTML);
        }
        rows.push(blocks);
        blocks = [];
    })
    th = [rows[0]];
    rows.shift()
    table_values = {
        headers_value: th,
        tr_values: rows
    };
}