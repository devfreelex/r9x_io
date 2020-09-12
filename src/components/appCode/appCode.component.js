
import styles from './appCode.styles'
import template from './appCode.template'

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';

// import 'highlight.js/styles/github.css';
import '../../assets/editor.theme.css'



const appCode = () => {

    const hooks = ({ methods }) => ({
        afterOnInit () {
            methods.initHighlight()
        }
    })

    const methods = ({elm, props, state}) => ({

        initHighlight () {
            hljs.configure({ languages: ['xml','html', 'css', 'javascript'] })
            hljs.registerLanguage('javascript', javascript);
            hljs.registerLanguage('xml', xml);
            hljs.registerLanguage('css', css);
            elm.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });     
        },

        htmlScape(str) {
            const specialChars = {
                '"': '&#34;',
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&#x34;',
                "'": '&#x27;',
                '/': '&#x2F;',
            }

            const regexScaper = /[&<>"\/]/g

            return ` ${str}`.replace(regexScaper, (match) => {
                return specialChars[match]
            })
            
        }        

    })

    return { 
        styles,
        template,
        hooks,
        methods,
    }
}

export { appCode }