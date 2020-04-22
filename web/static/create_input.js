let main_row = document.querySelector("#main-cells"),
    main_cells = main_row.querySelectorAll("th")
    input_form = document.querySelector(".form"),
    cell_size = 100/(main_cells.length),
    btn_accept = document.querySelector(".accept");

for (var i = 0; i < main_cells.length; i++){
    cell = document.createElement("input");
    input_form.insertBefore(cell ,btn_accept);
    cell.style.width = cell_size + "%";
    cell.placeholder = main_cells[i].innerHTML;
}