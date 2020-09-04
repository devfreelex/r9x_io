setTimeout(() => {
    const appMain = document.querySelector('app-main')
    const title = document.createElement('h1')
    title.textContent = 'r9x'
    title.style.textAlign = 'center'

    appMain.insertAdjacentElement('beforeend', title)    
},1000)

