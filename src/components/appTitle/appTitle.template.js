export default ({props, state}) => {

    const bigTitle = () => /*html*/ `
    <div class="title-wrapper">
        <h2 class="title">${props.title}</h2>
    </div>
    `

    const miniTitle = () => /*html*/ `
    <div class="title-wrapper">
        <h3 class="sub-title">${props.title}</h3>
    </div>
    `

    const superTitle = () => /*html*/ `
    <div class="title-wrapper">
        <h1 class="super-title">${props.title}</h1>
    </div>
    `

    if(props.type && props.type === 'mini') return miniTitle()
    if(props.type && props.type === 'big') return bigTitle()
    if(!props.type || props.type === 'super') return superTitle()
}