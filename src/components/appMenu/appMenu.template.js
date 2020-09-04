export default ({props, state}) => /*html*/`
    <div class="menu-wrapper">
        <ul class="list">
        ${state.menuList.map( item => /*html*/ `
            <li class="item">
                <a href="${item.link}" class="link">${item.label}</a>
            </li>
        `).join('')}
        </ul>
    </div>
`