
import { markdown } from 'markdown';

export default ({props, state}) => { 

    return /*html*/ `
    <div class="content-wrapper">
        <pre>
            <code class="javascript lineNumbers">${props.text}</code>
        </pre>
    </div>`
}
