export default ({props, state}) => {
    

    const bigTitle = () => /*html*/ `
    <div class="title-wrapper">
        <h2 class="title">${props.object.title}</h2>
    </div>
    `

    const miniTitle = () => /*html*/ `
    <div class="title-wrapper">
        <h3 class="sub-title">${props.object.title}</h3>
    </div>
    `

    const superTitle = () => /*html*/ `
    <div class="title-wrapper">
        <h1 class="super-title">${props.object.title}</h1>
    </div>
    `

    if(props.object.type && props.object.type === 'mini') return miniTitle()
    if(props.object.type && props.object.type === 'big') return bigTitle()
    if(!props.object.type || props.object.type === 'super') return superTitle()
}