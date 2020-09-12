export default ({ props, state, methods }) => {
    
    const { section } = props.object
    const { sections } = state[section]

    const tpl = sections.map((section) => {

        let sectionTitle = ''
        let sectionTagline = ''
        let sectionArticles = ''

        section.title ?
            sectionTitle = /*html*/ `<app-title data-props="{'title':'${section.title}', 'type':'big'}"></app-title>` :
            sectionTitle = ''

        section.tagline ?
            sectionTagline = /*html*/ `<p class="tagline">${section.tagline}</p>` :
            sectionTagline = ''

        section.articles && section.articles.length ?
            sectionArticles = section.articles.map((article) => {
                let articleTitle, articleParagraphs = ''

                article.title ? articleTitle = /*html*/`<app-title data-props="{'title':'${article.title}', 'type':'mini'}"></app-title>` : ''

                articleParagraphs = article.paragraphs.map(paragraph => {
                    let paragraphText, paragraphCode = ''
                    paragraph.text && paragraph.text !== '' ? paragraphText = /*html*/ `<p class="paragraph">${paragraph.text}</p>` : 'xxx'
                    paragraph.code && paragraph.code !== '' ? paragraphCode = /*html*/ `<app-code data-text="${paragraph.code.replace(/["]/g, '&#148;')}"></app-code>` : 'xxx'

                    return `${paragraphText || ''} ${paragraphCode || ''}`
                }).join('')

                return `${articleTitle} ${articleParagraphs}`
            }).join('') : ''

        return `
        ${sectionTitle} 
        ${sectionTagline}
        ${sectionArticles}
        `

    }).join('');

    return /*html*/`
    <div class="view-wrapper">
        <div class="container">
        ${tpl}
        </div>

    </div>
`
}

/*<app-title data-props="{'title':'Apresentação', 'type':'mini'}"></app-title>
<app-code data-text="${methods.htmlEncode(state.content)}"></app-code>*/