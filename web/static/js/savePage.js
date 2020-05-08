let btn_save = document.querySelector('.btn_save');

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

btn_accept.addEventListener('click', () => {
    postData('http://127.0.0.1:5000/post', {
            'document': document.documentElement.innerHTML,
            'title': document.querySelector('title').innerHTML
        })
})