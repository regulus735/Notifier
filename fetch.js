const url = 'https://localhost:5001/api/reminder';
const form = document.querySelector("form");
const textareas = document.querySelectorAll("textarea");

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

form.addEventListener("submit", function (e) {
    e.preventDefault();

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
        })
        .catch((error) => {
            console.error("Error:", error);
        });


})
