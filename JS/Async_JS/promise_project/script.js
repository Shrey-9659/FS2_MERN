const fetchUser = document.getElementById("fetchUser")

fetchUser.addEventListener("click", () => {
    const card = document.getElementById("user-card")
    const url = "https://randomuser.me/api"
    card.innerHTML = "<p>Loading...</p>"
    fetch(url)
    .then((rawData) => rawData.json())
    .then(data => {
        user = data.results[0];
        console.log(user)
        card.innerHTML = `
        <img src="${user.picture.large}" alt="User Picture">
        <h2>${user.name.first} ${user.name.last}</h2>
        <p>${user.email}</p>
        <p>${user.location.city}, ${user.location.country}</p>
        `
    })
    .catch((err) => {
        card.innerHTML = `<p style="color:red;">Error : ${err.message}</p>`
    })
})