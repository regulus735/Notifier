const url = 'http://reminder-api-app.azurewebsites.net/api/reminder',
    form = document.querySelector("form"),
    textareas = document.querySelectorAll("textarea"),
    input = document.querySelector("input[type=submit]");


const toJSONString = () => {
    let data = {};
    textareas.forEach(item => {
        let name = item.name,
            value = item.value;

        if (name) {
            data[name] = value;
        }
    })
    return data;
}

const changeInput = (color) => {
    input.disabled = !input.disabled;
    input.style.backgroundColor = color;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    changeInput('#ec7c81');

    fetch(url, {
        method: "Post",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(toJSONString()),
    })
        .then(() => {
            textareas.forEach(e => e.value = "");
            changeInput('#EC3942')
        })
        .catch((error) => {
            console.error("Error:", error);
            changeInput('#EC3942')
        });
})
