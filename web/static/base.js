let btn_offer = document.querySelector(".offer"),
    btn_accept = document.querySelector('.accept'),
    form_offer = document.querySelector(".form"),
    btn_decline = document.querySelector(".decline"),
    new_offer = document.querySelectorAll("input"),
    table = document.querySelector("tbody"),
    tr_values = document.querySelectorAll("tr");


pseudo_hover();

btn_offer.addEventListener("click", () => {
    if (form_offer.style.display != "grid") {
        form_offer.style.display = "grid";
    } else {
        form_offer.style.display = "none";
    }
})

btn_accept.addEventListener("click", () => {
    if (new_offer[0].value && new_offer[1].value) {
        tr = document.createElement("tr");
        new_offer.forEach(el => {
            td = document.createElement("td");
            td.innerHTML = el.value;
            tr.appendChild(td)
        });
        table.appendChild(tr);
        new_offer.forEach(element => {
            element.value = "";
        });
        pseudo_hover();
    }
})

btn_decline.addEventListener("click", () => {
    new_offer.forEach(element => {
        element.value = '';
    });
})

function pseudo_hover() {
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