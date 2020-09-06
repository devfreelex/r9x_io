
import styles from './appCode.styles'
import template from './appCode.template'

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

// import 'highlight.js/styles/github.css';
import '../../assets/editor.theme.css'



const appContent = () => {

    const hooks = ({ methods }) => ({
        afterOnInit () {
            methods.initHighlight()
        }
    })

    const methods = ({elm, props, state}) => ({

        initHighlight () {
            hljs.registerLanguage('javascript', javascript);
            elm.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });     
        }

    })

    return { 
        styles,
        template,
        hooks,
        methods,
    }
}

export { appContent }