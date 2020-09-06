import { storeFactory } from 'r9x_js'

const store = storeFactory({
    introduction: {
        sections: [
            {
                title: 'Apresentação',
                tagline: 'R9X Interfaces reativas com factory functions.',
                articles: [
                    {
                        title: 'Para que serve r9x?',
                        paragraphs: [
                            {
                                text: 'Frameworks reduzem muito pouco o tempo de desenvolvimento de projetos para produção. Por isso, R9X foca na organização do código e oferece formas simples de reagir a mudanças no estado da aplicação. Acreditamos que esse é o ponto chave para acelerar o desenvolvimento de qualquer aplicação.',
                            }
                        ],
                    },
                    {
                        title: 'Objetivo',
                        paragraphs: [
                            {
                                text: 'O objetivo desse artigo é apresentar de forma clara os recursos fornecidos por r9x para desenvolvimento de interfaces reativas. Por isso, é de suma importância que você leia essa documentação para entender os recursos existentes na biblioteca.'
                            }
                        ],
                    },
                ]
            },
            {
                title: 'Instalando R9X',
                tagline: 'r9x está nos repositórios do npm é fácil instalar.',
                articles: [
                    {
                        title: 'Versões',
                        paragraphs: [
                            {
                                text: 'Com o comando abaixo você instala a versão mais recente da biblioteca.',
                                code: `npm install --save r9x_js`
                            }
                        ],
                    }
                ]
            },
            {
                title: 'Arquitetura',
                tagline: 'Estruturar um projeto é super simples.',
                articles: [
                    {
                        title: 'Montando a base de um projeto',
                        paragraphs: [
                            {
                                text: 'O código abaixo define a base de um projeto com rotas de navegação.',
                                code: `
import { r9x } from 'r9x_js'

import { appMain as main } from './src/components/appMain.component'
import {appHome} from './src/components/appHome/appHome.component'
import { appNotFound } from './src/components/appNotFound.component'

const routes = {
    firstRoute: { hash: '#/', component: appHome },
    defaultRoute: { hash: '#/404', component: appNotFound },
    otherRoutes: [
        { hashExp: /^\#\/$/, component: appHome },
    ]
}

const app = r9x()

app.use({
    main,
    routes,
})

app.init()`
                            },
                            {
                                text: 'Observe o trecho abaixo:',
                                code: `
const routes = {
    firstRoute: { hash: '#/', component: appHome },
    defaultRoute: { hash: '#/404', component: appNotFound },
    otherRoutes: [
        { hashExp: /^\#\/$/, component: appHome },
    ]
}                            
                            `
                            },
                            {
                                text: 'Temos aqui a definição das rotas, onde firstRoute define a rota que será carregado assim que a aplicação inicializar, seguido por defaultRoute que define o componente a ser carregado se uma rota não registrada for acessada e logo depois temos otherRoutes que fornece os demais componentes para cada roda de navegação registrada.'
                            },
                            {
                                text: 'firstRoute e defaultRoute possuem a propriedade hash que difere da propriedade hashExp de otherRoutes. Isso acontece porque no modelo de roteador padrão, as rotas iniciais precisam ser strings simples enquanto em otherRoutes o roteador utiliza expressões regulares para identificar o hash acessado no navegador para então carregar o componente definido para a rota.'
                            },
                            {
                                text: 'R9X utiliza o padrão factory para quase tudo, inclusive a função de inicialização r9x() é uma factory que retorna um objeto contendo o método use(), utilizado para definir o componente principal e as rotas e o método init para inicializar a aplicação. Veja abaixo:',
                                code: `
                            
app.use({
    main,
    routes,
})

app.init()                            
                            `
                            }
                        ],
                    }
                ]
            },
            {
                title: 'Fabricando componentes',
                tagline: 'Componentes são apenas factory functions',
                articles: [
                    {
                        title: 'Compontes como funções fábricas',
                        paragraphs: [
                            {
                                text: 'para R9X componentes são apenas funções fábricas que retornam recursos predefinidos. Veja abaixo a criação de um componente.',
                                code: `
const appHelloWord = () => {

    const state = {
        text: 'hello World!'
    }

    const template = ({props, state}) => {
        return /*html*/ \`< h1 > \${state.text} < /h1 >\`
    }

    const styles = () => /*css*/ \`
        h1 { color: blue }
    \`

    return { state, template, styles }
}                            
                            `
                            },
                        ]
                    },
                    {
                        title: 'State',
                        paragraphs: [
                            {
                                text: 'Observe o trecho:',
                                code: `
    const state = {
        text: 'hello World!'
    }                            
                            `
                            },
                            {
                                text: 'Esse é o state que contém os dados locais do componente e qualquer alteração na propriedade text do state fará com que o template seja atualizado.'
                            }
                        ]
                    },
                    {
                        title: 'Template',
                        paragraphs: [
                            {
                                text: 'R9X utiliza template literals para marcar o html. Dessa forma reduz complexidade e elimina a necessidade de criar diretivas acionadas diretamente no template para proporcionar interação e realizar transformações ou validações nos dados do compoenente. Segue abaixo o trecho de código que representa o template do componente.',
                                code: `
    const template = ({props, state}) => {
        return /*html*/ \`< h1 > \${state.text} < /h1 >\`
    }                            
                            `
                            },
                            {
                                text: 'Observe que nesse caso, o template tem acesso a props e state. Props, acessa as propriedades reativas passadas pela tag do componente, enquanto state acessa as propriedades do state.',
                                code: `
< app-hello-world data-props="{'text':'hello world'}">< /app-hello-world >                            
                            `
                            },
                            {
                                text: 'Dessa forma o template pode obter o texto a ser exibido através das propriedades reativas ao invés do state.'
                            },
                            {
                                code: `
    const template = ({props, state}) => {
        return /*html*/ \`< h1 > \${props.object.text} < /h1 >\`
    }                            
                            `
                            },
                            {
                                text: 'A propriedade methods do componente também está acessível para o template. Por tanto, é possível realizar a transformação e validação de dados acessando uma função previamente definida caso seja necessário.',
                                code: `
    const template = ({methods}) => {
        return /*html*/ \`< h1 > \${methods.getText()} < /h1 >\`
    }                               
                            `
                            }
                        ]
                    },
                    {
                        title: 'Estilos CSS',
                        paragraphs: [
                            {
                                text: 'Os estilos css são retornado pela função styles e assim que o componente é rederizado, são aplicados para estilizar as tags do template.',
                                code: `
    const styles = () => /*css*/ \`
        h1 { color: blue }
    \`                            
                            `
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Methods, Events e Hooks',
                tagline: 'Definindo comportamentos com eventos, hooks e methods',
                articles: [
                    {
                        title: 'Methods',
                        paragraphs: [
                            {
                                text: 'Os métodos de um componente são apenas funções simples que executam alguma operação. Os métodos também podem acessar as propriedades reativas e o state do componente.',
                                code: `

const appHelloWorld = ()  => {

    //código omitido

    const methods = ({props, state}) => ({

        logger (...params) { 
            console.log(...params)
        },

        logPropText () {
            const { text } = props.get()
            console.log('Prop Text: ', text)
        },

        logStateText () {
            const { text } = state.get()
            console.log('State Text': text)
        }

    })

    return {
        //código omitido
        methods
    }
}

                            `
                            },
                            {
                                text: 'Observe que para obter a propriedade text tanto de props, quanto de state, foi utilizado uma função get disponibilizada pelo reator da biblioteca. O reator é o gerenciador de mutações que observa props e state para atualizar o template do componente se uma alteração nos dados ocorrer.'
                            },
                            {
                                text: 'o reator ainda disponibiliza a propriedade set para realizar alterações nas propriedades reativas e no state do componente. Veja abaixo:',
                                code: `
const appHelloWorld = () => {

    //código omitido

    const methods = ({props, state}) => ({

        changeStateText = (value) => {
            state.set({text:value})
        },

        changePropText = (value) => {
            prop.set({text:value})
        },

    })

    return {
        //código omitido
        methods
    }    
}                        
                            `
                            }
                        ]
                    },
                    {
                        title: 'Events',
                        paragraphs: [
                            {
                                text: 'É através dos events que o componente gerencia a interação do usuário da aplicação com o template do componente. Veja o exemplo:',
                                code: `
const appHelloWorld = () => {

    const state = {
        text: 'Hello World'
    }

    const template = ({props, state}) => {
        return /*html*/ \`< h1 > \${state.text} < /h1 >\`
    }    
    
    const styles = () => /*css*/ \`
        h1 { color: blue }
    \` 

    //Bind de eventos

    const events = ({on, query, methods}) => ({

        onClickTitle () {
            const titleElm = query('h1')
            on('click', [titleElm], methods.logElement)
        }
    })

    const methods = ({props, state}) => ({

        logElement({target}) { console.log(target) }
        
    })


}                    
                    `
                            },
                            {
                                text: 'Events disponibiliza para os handlers 3 recursos, query, queryAll e on. Estas, são funções auxiliares onde query e queryAll retornam elementos html encontrados no contexto do componente. Já on, é utilizado para realizar o bind de eventos. A função on recebe 3 parametros.',
                            },
                            {
                                text: '1º - o nome do evento, 2º um array de elementos, 3º o ouvinte, função a ser executado quando o evento ocorrer.',
                                code: `
//código omitido

const events = ({on, query, methods}) => ({

    onClickTitle () {
        const titleElm = query('h1')
        on('click', [titleElm], methods.logElement)
    }
})

//código omitido    
                            `
                            },
                            {
                                text: 'Observe acima que events também acessa o método logElement disponibilizado através da propriedade methods do componente.'
                            }
                        ]
                    },
                    {
                        title: 'Hooks',
                        paragraphs: [
                            {
                                text: 'Atualmente existem 4 rooks que podem ser utilizados para executar operações durante as fazes do ciclo de vida do componente. Esses hooks são beforeOnInit, afterOnInit, beforeOnRender e afterOnRender.',
                                code: `
const appHelloWorld = () => {
    
    //código omitido

    const hooks = () => ({
        beforeOnInit () {
            console.log('executa uma vez antes do componente ser inicializado')
        },

        afterOnInit () {
            console.log('executa uma vez depois do componente ser inicializado')
        },

        beforeOnRender () {
            console.log('executado sempre antes da renderização do componente ocorrer')
        },

        afterOnRender () {
            console.log('executado sempre depois da renderização do componente ocorrer')
        },
    })

    return { hooks }
}                            
                            `
                            },
                            {
                                text: 'Os hooks também acessam os métodos do componente.',
                                code: `
const appHelloWorld = () => {
    
    //código omitido

    const hooks = ({methods}) => ({
        beforeOnInit () {
            methods.logMessage('executa uma vez antes do componente ser inicializado')
        },

        afterOnInit () {
            methods.logMessage('executa uma vez depois do componente ser inicializado')
        },

        beforeOnRender () {
            methods.logMessage('executado sempre antes da renderização do componente ocorrer')
        },

        afterOnRender () {
            methods.logMessage('executado sempre depois da renderização do componente ocorrer')
        },
    })

    const methods = ({props, state}) => ({
        
        logMessage (text) {
            console.log(text)
        }

    })

    return { hooks, methods }
}                             
                            `
                            }
                        ]
                    }
                ]
            },
            {
                title: "Conclusão!",
                tagline: 'R9X é simples de aprender e aplicar.',
                articles: [
                    {
                        title: 'Menos tempo estudando mais tempo produzindo.',
                        paragraphs: [
                            {
                                text: 'Bem, chegamos ao fim dessa introdução e acredite... Você já viu quase tudo que há para saber sobre R9X.'
                            },
                            {
                                text: 'Se acha que isso ainda não é o suficiente para desenvolver interfaces reativas, te convido a seguir o tutorial disponível aqui nesse site. Ele vai te convencer!'
                            },
                            {
                                text: 'Antes de ir para o tutorial, seria interessante ler a sessão store. O conteúdo disposto nela vai te ajudar a entendender como os componentes podem compartilhar dados e reagir de acordo com as mutações desses dados.',
                            },
                        ]
                    }
                ]
            },

        ]        
    },
    store: {
        sections: [
            {
                title: 'Store',
                tagline: 'Observable Store, simples e eficiente.',
                articles: [
                    {
                        title: 'Compartilhando dados observaveis',
                        paragraphs: [
                            {
                                text: 'Uma store de dados é apenas um objeto observável.',
                            },
                            {
                                text: 'Para criar uma nova store, basta importar storeFactory e fornecer para a função fábrica o objeto de dados a ser observado.',
                                code:`
import { storeFactory } from 'r9x_js'

const store = storeFactory({
    title:'New Store'
})

export { store }
                                `
                            },
                        ]
                    },
                    {
                        title:'Reagindo a mutações',
                        paragraphs: [
                            {
                                text: 'Para reagir as mutações nos dados de uma store, um componente precisa se inscrever para ouvir suas mutações.',
                                code: `
import { store } from 'another/place/store'

const appTitle = () => {

    const state = store.get()

    const template = ({props, state}) => {
        return /*html*/ \`< h1 > \${state.title} < /h1 >\`
    }

    const styles = () => /*css*/ \`
        h1 { color: blue }
    \` 

    const hooks = () => ({

        beforeOnInit () {
            store.subscribe((payload) => {
                state.set(payload)
            })
        }

    })

    return {
        state,
        template,
        styles,
        hooks
    }
}                                
                                `
                            },
                            {
                                text: 'No trecho de código acima, temos várias coisas acontecendo. Mas, note que uma store foi importada dentro do arquivo do componente.',
                                code:`
import { store } from 'another/place/store'

const appTitle () => { /*codigo omitido*/ }
                                `
                            },
                            {
                                text:'Em seguida, o componente obtem os dados da store e armazena no state local.',
                                code:`
import { store } from 'another/place/store'

const appTitle () => { 
    
    const state = store.get()

    /*codigo omitido*/ 

}                                
                                `
                            },
                            {
                                text:'Observe que nas próximas linhas, o componente se inscreve para ouvir as mutações da store e reagir a elas aproveitando-se do hook beforeOnInit. Assim, sempre que a store for alterada, os state local e o template do componente serão atualizados.',
                                code:`
import { store } from 'another/place/store'

const appTitle () => { 
    
    const state = store.get()

    /*codigo omitido*/ 

    const hooks = () => ({

        beforeOnInit () {
            store.subscribe((payload) => state.set(payload))
        }

    })
    
    /*codigo omitido*/

}                                  
                                `
                            },
                            {
                                text:'Olhando com mais profundidade, você notará que o método subscribe da store recebe um callback. Esse callback será executado sempre que a store mudar. O mais interessante é que sempre que o callback é executado, o mesmo recebe os novos dados da store através do parametro payload. Dessa forma, através do metodo state.set() é possível atualizar os dados do state local do componente fazendo com que o mesmo atualize o seu template para exibir as informações atualizadas. Veja abaixo:',
                                code:`
/*Código omitido*/
store.subscribe((payload) => state.set(payload))
/*Código omitido*/
                                `
                            }
                        ]
                    }
                ]                
            },            
            {
                title: 'Conclusão',
                tagline: 'Simplicidade é a palavra chave!',
                articles: [
                    {
                        title: 'Justificando o padrão observable store',
                        paragraphs: [
                            {
                                text: 'R9X adota o padrão de dados observáveis para simplificar o processo de desenvolvimento de aplicações reais. Dessa forma, um componente pode se inscrever para ouvir mudanças somente nos dados que importam.',
                            },
                            {
                                text: 'Bem isso é tudo sobre observable store. Mas, seria interessante ir para a próxima sessão "tutorial" para por em prática todos os recursos detalhados até esse ponto.'
                            }
                        ]
                    }
                ]                
            }            
        ]
    }
})

export { store }