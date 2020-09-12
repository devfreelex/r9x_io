
import { markdown } from 'markdown';

export default ({props, state, methods}) => { 
    
    const getType = () => {
        const text = props.text
        const isHTML = /\*html\*/
        const isCSS = /\*css\*/
        const isJS = /\.component\./

        if(isHTML.test(text)) return 'html'
        if(isCSS.test(text)) return 'css'

        return 'javascript'
    }

    return /*html*/ `
    <div class="content-wrapper">
        <pre>
            <code class="${getType()}">${methods.htmlScape(props.text)}</code>
        </pre>
    </div>`
}
