export default ({props, state, methods}) => {

    const { sections } = state

    // console.log('--->', JSON.stringify(sections))
    return /*html*/`
    <div class="home-wrapper">
        <div class="container">
            <app-view data-props="{'section':'introduction'}"></app-view>
        </div>

    </div>
`
}

/*<app-title data-props="{'title':'Apresentação', 'type':'mini'}"></app-title>
<app-code data-text="${methods.htmlEncode(state.content)}"></app-code>*/