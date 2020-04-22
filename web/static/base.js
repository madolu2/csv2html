let btn_offer = document.querySelector(".offer"),
    btn_accept = document.querySelector('.accept'),
    form_offer = document.querySelector(".form"),
    btn_decline = document.querySelector(".decline"),
    new_offer = document.querySelectorAll("input"),
    table = document.querySelector("tbody"),
    tr_values = document.querySelectorAll("tr"),
    trash = [],
    table_values = {};


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
    function change_color(element, event, color) {
        element.addEventListener(event, () => {
            children = Array.from(element.children);
            children.forEach(element => {
                element.style.backgroundColor = color;
            });
        })
    }

    let th_array = [],
        td_array = [],
        tr_array = [];

    document.querySelectorAll("tr").forEach(element => {
        if (element.id != "main-cells") {
            change_color(element, 'mouseover', "#ff7878")
            change_color(element, 'mouseout', "#e4e4e4")
            element.addEventListener('click', (e) => {
                parent = e.target.parentElement;
                trash.push(e.target);
                parent.remove(e.target);
            })
        }
        children = Array.from(element.children);
        children.forEach(element => {
            if (element.parentElement.id == "main-cells") {
                th_array.push(element.innerHTML);
            } else {
                td_array.push(element.innerHTML);
            }
        });
        if (td_array.length) {
            tr_array.push(td_array);
            td_array = [];
        }
    });
    table_values = {
        'headers': th_array,
        'tr_array': tr_array
    }
}