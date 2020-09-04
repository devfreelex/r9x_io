const appNotFound = () => {
    
    const state = {
        title: 'Not Found!'
    }

    const template = ({props, state}) => /*html*/ `
    <div class="wrapper">
        <h1 class="title">${state.title}</h1>
        <a href="#/">voltar</a>
    </div>
    `

    const styles = () => /*css*/ `
        app-not-found .wrapper { text-align:center }
        app-not-found .title { color: red }
    `

    return {
        state,
        template,
        styles
    }
}

export { appNotFound }