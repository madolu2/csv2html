let btn_save = document.querySelector('#btn_save');

f = () => {
    const rawResponse = fetch('http://127.0.0.1:5000/save_page', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': document.querySelector('title').innerHTML,
            'document': document.all.item(0).innerHTML
        })
    });
}

btn_save.addEventListener('click', (f()))