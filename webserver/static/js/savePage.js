let btn_save = document.querySelector('#btn_save');

btn_save.addEventListener('click', (async () => {
    const rawResponse = await fetch('http://127.0.0.1:5000/save_page', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(document.all.item(0).innerHTML)
    });
    const content = await rawResponse.json();

    console.log(content);
})())