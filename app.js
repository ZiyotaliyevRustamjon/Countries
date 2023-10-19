const btn = document.querySelector('.btn')
const show = document.querySelector('.show')

btn.addEventListener('click', () => {
    const inputText = document.querySelector('.inputText').value;

    fetch(`https://restcountries.com/v3.1/name/${inputText}`)
        .then(response => response.json())
        .then(data => show.innerHTML = `
            <h1 class="title1">${data[0].name.common}</h1>
            <p class="title2">${data[0].name.official}</p>
            <h2 class="title3"> ${data[0].capital}</h2>
            <img class="img1" src=${data[0].flags.png} alt="">
            <p class="title4">${data[0].flags.alt}</p>
            <img class="img2" src=${data[0].coatOfArms.png} alt="">
            <h3 class="title5">Timezones: ${data[0].timezones}</h3><br>
            <p class="title6">Population: ${data[0].population}</p><br>
            <h3 class="title7">Borders: ${data[0].borders}</h3><br>
            <a class="link" href=${data[0].maps.googleMaps} target="_blanck">Google Maps</a>
        `)
})