 export const pikoDex = (pikomon) => {
    const pikomonDisplay = document.createElement('div')
    pikomonDisplay.classList.add('pikomon')

    const img = document.createElement('img')
    img.src = pikomon.imageUrl
    img.alt = pikomon.name
    
    const name = document.createElement('h2')
    name.textContent = pikomon.name

    const category = document.createElement('p')
    category.textContent = `Category = ${pikomon.category}`

    const abilities = document.createElement('p')
    abilities.textContent = `Abilities: ${pikomon.abilities}`
    
    const weakness = document.createElement('p')
    weakness.textContent = `Weakness: ${pikomon.weakness}`
  
    
    pikomonDisplay.appendChild(img)
    pikomonDisplay.appendChild(name)
    pikomonDisplay.appendChild(category)
    pikomonDisplay.appendChild(abilities)
    pikomonDisplay.appendChild(weakness)

    return pikomonDisplay
}
