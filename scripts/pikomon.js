import { pikoDatabase } from "./database.js"


export const pikomonHTML = pikoDatabase.map(pikomon => {
    return `
    <div class="piko-card">
        <img src="${pikomon.imageUrl}" alt=${pikomon.name}" class="piko-img">
        <h2 class="piko-name">${pikomon.name}</h2>
        <p class="piko-info">
            <strong>Category:</strong> ${pikomon.category}<br>
            <strong>Abilities:</strong> ${pikomon.abilities}<br>
            <strong>Weakness:</strong> ${pikomon.weakness}
        </p>
    </div>`
}).join("")