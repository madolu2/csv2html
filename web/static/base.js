let btn_offer = document.querySelector(".offer"),
    form_offer = document.querySelector(".form"),
    btn_accept = document.querySelector(".accept"),
    btn_decline = document.querySelector(".decline"),
    new_offer = {
        name:document.querySelector(".name"),
        cost:document.querySelector(".cost")
    },
    table = document.querySelector("tbody");


btn_offer.addEventListener("click", ()=>{
    form_offer.style.display = "flex";
})

btn_accept.addEventListener("click", ()=>{
    new_row = table.appendChild( document.createElement("tr"));
    new_row.innerHTML = "<td>"+ new_offer.name.value + "</td><td>" + new_offer.cost.value +"</td>";
    new_offer.name.value = "";
    new_offer.cost.value = "";
})

btn_decline.addEventListener("click", ()=>{
    form_offer.style.display = "none";
})
