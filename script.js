new Promise ((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users");

    xhr.addEventListener('load', () => {
        resolve(xhr.responseText);
    });

    xhr.addEventListener('error', () => {
        reject();
    });
    
    xhr.send();
}).then(responseText => {
    let users = JSON.parse(responseText);

    let sourse = userItemTemplate.innerHTML;
    let templateFn = Handlebars.compile(sourse);
    let template = templateFn({list: users});
 
    results.innerHTML = template;
}).catch( () => {
    console.error('Loading Error!');
});