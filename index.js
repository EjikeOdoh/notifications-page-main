
let alerts = document.querySelectorAll('.red');

const toRead = () => {

    let posts = document.querySelectorAll('.gray-blue');
    posts.forEach(post => {
        post.classList.remove('gray-blue');
    })

    alerts.forEach(alert => {
        alert.classList.remove('red');
    })

    alerts = document.querySelectorAll('.red');

    let alert = document.querySelector('.alert');

    alert.innerHTML = alerts.length;
};