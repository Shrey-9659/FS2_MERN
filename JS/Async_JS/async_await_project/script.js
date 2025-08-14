const fetchUser = document.getElementById("fetchUser")

fetchUser.addEventListener("click", async () => {
    try {
        const card = document.getElementById("user-card")
    const url = "https://randomuser.me/api"
    card.innerHTML = "<p>Loading...</p>"
    const rawData = await fetch(url)
    const data = await rawData.json();
        user = data.results[0];
        card.innerHTML = `
        <img src="${user.picture.large}" alt="User Picture">
        <h2>${user.name.first} ${user.name.last}</h2>
        <p>${user.email}</p>
        <p>${user.location.city}, ${user.location.country}</p>
    `
    } catch (error) {
        console.log(error)
    }   
})