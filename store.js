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
        return /*html*/ \`<h1> \${state.text} </h1>\`
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
        return /*html*/ \`<h1> \${state.text} </h1>\`
    }                            
                            `
                            },
                            {
                                text: 'Observe que nesse caso, o template tem acesso a props e state. Props, acessa as propriedades reativas passadas pela tag do componente, enquanto state acessa as propriedades do state.',
                                code: `
<app-hello-world data-props="{'text':'hello world'}"></app-hello-world>                            
                            `
                            },
                            {
                                text: 'Dessa forma o template pode obter o texto a ser exibido através das propriedades reativas ao invés do state.'
                            },
                            {
                                code: `
    const template = ({props, state}) => {
        return /*html*/ \`<h1> \${props.object.text} </h1>\`
    }                            
                            `
                            },
                            {
                                text: 'A propriedade methods do componente também está acessível para o template. Por tanto, é possível realizar a transformação e validação de dados acessando uma função previamente definida caso seja necessário.',
                                code: `
    const template = ({methods}) => {
        return /*html*/ \`<h1> \${methods.getText()} </h1>\`
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
        return /*html*/ \`<h1> \${state.text} </h1>\`
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
        return /*html*/ \`<h1> \${state.title} </h1>\`
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
    },
    tutorial: {
        sections: [
            {
                title: 'Tutorial',
                tagline: 'Aplicando r9x para construtir um gerenciador de locação de filmes.',
                articles: [
                    {
                        title: 'Introdução',
                        paragraphs: [
                            {
                                text: 'Esse tutorial aborda a construção de um gerenciador de locação de filmes de forma direta, afim de otimizar o tempo necessário para construir o app e aprender r9x.',
                            },
                            {
                                text: 'A partir da próxima sessão você pode acompanhar a construção passo-a-passo do app e poderá entender os conceitos e recursos necessários para desenvolver aplicações com r9x.',
                            },
                        ],
                    },
                    {
                        title: 'Mão na massa!',
                        paragraphs: [
                            {
                                text: 'O primeiro passo para desenvolver a aplicação proposta é definir a base do projeto. Utilizaremos "degit" para clonar o repositório r9x_tutorial, pois essa é a forma mais rápida para criar a estrutura do projeto.',
                            },
                            {
                                text: 'A ferramenta "degit" é um módulo diponível nos repositórios do npm. Seu trabalho é clonar repositórios git sem rastreamento. Isso significa que você pode clonar rapidamente r9x_tutorial e em seguida definir suas próprias configurações de versionamento.',
                            },
                            {
                                text: 'Para instalar "degit" no linux utilize o comando abaixo ou pesquise por degit no site do npm para mais instruções.',
                                code:'sudo npm install degit -g'
                            },
                            {
                                text:'Para clonar o projeto, crie uma nova pasta, um nome sugestivo é "movie-manager" abra a pasta no terminal e digite:',
                                code:'degit github:devfreelex/r9x_tutorial'
                            },
                            {
                                text:'Pronto, a estrutura do projeto já foi criada ou clonada.'
                            },
                            {
                                text: 'Observe que temos a seguinte estrutura de arquivos e diretórios:'
                            },
                            {
                                code: `
src
|_ assets
|_ components
|_ main.js
index.html
package.json
                                `
                            }, 
                            {
                                text:'Na raiz do projeto está o arquivo index.html reponsável por carregar o arquivo main.js que contém as configurações básicas para inicialização do projeto.'
                            },
                            {
                                text:'Ainda na raiz do projeto, está o arquivo package.json, esse arquivo contém as confgurações de depências do projeto e comandos específicos para rodá-lo em ambiente de desenvolvimento e produção.'
                            },
                            {
                                text:'Dentro da pasta src fica a pastas assets, que contém arquivos de estilização. Esses arquivos já estão prontos para uso. Ainda em src está a pasta components, que deve conter os componentes da aplicaçao.'
                            },
                            {
                                text:'Para finalizar essa sessão, execute no terminal o comano abaixo:',
                                code:`npm install`
                            },
                            {
                                text:'Esse comando instalará todas as dependências do projeto. Após a instalação ser concluída inicialize a aplicação em modo de desenolvimento executando o comando:',
                                code:'npm run dev'
                            },
                            {
                                text:'Pronto, para ver o resultado acesse em um navegador, de preferência no chrome a url: http://localhost:3000. Se tudo deu certo a aplicação deve mostrar na tela um "Hello World!".'
                            },
                            {
                                text:'A partir da próxima sessão, criaremos o bootstrap e os componentes do gerenciador de locação de filmes.'
                            }
                        ],
                    },
                    {
                        title:'Bootstrap da aplicaçao',
                        paragraphs:[
                            {
                                text:'Dentro do arquivo main.js defina o código abaixo:',
                                code:`
import { r9x } from 'r9x_js'

const routes = {}

const app = r9x()

app.use({
    main,
    routes,
})

app.init()                                
`
                            },
                            {
                                text:'No trecho de código acima, importamos r9x como uma dependência e criamos o objeto de rotas ("routes").'
                            },
                            { 
                                text: 'Na sequencia, executamos r9x que retorna para a variável app, dois métodos auxiliares para adicionar recursos ao projeto e inicializar a aplicaçao. Esses metodos são "use" e "init" respectivamente.'
                            },
                            {
                                text:'Agora observe que passamos os objetos routes e main para o método use, mas, perceba que main não existe ainda.'
                            },
                            {
                                text: 'Para r9x o componente principal da aplicação tem um nome padrão, esse nome é main. Então, vamos importar esse componente agora, caso contrário ao atualizar a página da aplicação obteremos um erro.'
                            },
                            {
                                text:'Para fins didáticos, o componente main.js assim como o componente appNotFound, foi préviamente criado para este tutorial. Portanto, vamos importálos agora.',
                                code:`
import { appMain as main } from './components/appMain.component'
import { appNotFound } from './components/appNotFound.component'

`
                            },
                            {
                                text:'Aproveitando o momento, vamos também definir as configurações para as rotas de navegação.',
                                code:`
const routes = {
    firstRoute: { hash: '#/', component: appHome },
    defaultRoute: { hash: '#/404', component: appNotFound },
    otherRoutes: [
        { hashExp: /^\#/$/, component: appHome },
        { hashExp: /^\#/user/\d+$/, component: appUserDetail },
    ]
}                                
                                `
                            },
                            {
                                text: 'O objeto de rotas é composto por três chaves, "firstRoute", "defaultRoute" e "otherRoute".'
                            },
                            {
                                text: 'A chave firstRoute define a rota inicial da aplicação  e o componente a ser carregado para essa rota através do objeto interno e suas propriedades "hash" e "component".',
                                code: `
firstRoute: { hash: '#/', component: appHome },                                
                                `
                            },
                            {
                                text: 'A chave defaultRoute segue a mesma lógica, mas, define uma rota a ser carregada apenas quando uma rota não existente for acessada na aplicação. Nesse caso, o componente a ser carregado na rota padrão e o appNotFound.',
                                code:`
defaultRoute: { hash: '#/404', component: appNotFound },                                
                                `
                            },
                            {
                                text: 'A chave otherRoutes também segue a mesma lógica, porém, carrega componentes para rotas existentes sempre que ocorre uma mudança na url do navegador. Observe ainda que o objeto interno dessa propriedade não possui a propriedade hash e sim a propriedade hashExp que é uma expressão regular ao contrário da propriedade hash que armazena uma string.',
                                code:`
otherRoutes: [
    { hashExp: /^\#/$/, component: appHome },
    { hashExp: /^\#/user/\d+$/, component: appUserDetail },
]                                
                                `
                            },
                            {
                                text: ' A substituição de hash para hashExp é necessária para verificar se a rota acessada é válida e uma das melhores formas para fazer isso é usando expressõo regular. Então sim, as rotas em r9x são baseadas em expressões regulares.'
                            },
                            {
                                text: 'O código completo fica assim:',
                                code:`
import { r9x } from 'r9x_js'
import { appMain as main } from './components/appMain.component'
import { appHome } from './components/appHome/appHome.component'
import { appNotFound } from './components/appNotFound.component'

import './assets/styles/reset.css'
import './assets/styles/main.css'

const routes = {
    firstRoute: { hash: '#/', component: appHome },
    defaultRoute: { hash: '#/404', component: appNotFound },
    otherRoutes: [
        { hashExp: /^\#/$/, component: appHome },
    ]
}

const app = r9x()

app.use({
    main,
    routes,
})

app.init()                                
                                `
                            },
                            {
                                text:'Ainda obteremos um erro ao executar a aplicação, pois, o component appHome definido para a rota inicial ainda não existe. Então o criaremos na próxima sessão.'
                            }
                        ]
                    },
                    {
                        title:'Components',
                        paragraphs:[
                            {
                                text:'Componentes para r9x são apenas factory functions que retornam um objeto contendo as propriedades de um componente.',
                            },
                            {
                                text:'Vamos criar o componente appHome. Por isso, dentro da pasta components crie a pasta appHome e dentro dela os arquivos:',
                                code: `
appHome.component.js
appHome.template.js
appHome.styles.js                                
                                `
                            },
                            {
                                text: 'Os sufixos .component, .template, .styles são bem descritivos. Está claro a responsabilidade de cada arquivo do componente.'
                            },
                            {
                                text:'Dentro do arquivo appHome.component.js insira o código abaixo:',
                                code:`
/*appHome.template.js*/
                                
import template from './appHome.template.js'
import styles from './appHome.styles.js'

const appHome = () => {
    
    return  {
        template,
        styles
    }

}

export { appHome }
                                `
                            },
                            {
                                text:'Observe que o componente tem duas dependências, o template e seus estilos. Precisamos definir a função de template e de estilos. Criaremos agora o template.',
                                code: `
//appHome.template.js                                

    export default ({props, state}) => {
        return /*html*/ \`<h1> appHome </h1>\`
    }
                                `
                            },
                            {
                                text:'Observe que a função que define o template recebe um parâmetro, do qual extrai propriedades (props) e dados (state) que mais tarde podem ser utilizados pelo template.'
                            },
                            {
                                text:'Hora de criar os estilos.',
                                code:`
//appHome.styles.js

export default () => /*css*/ \` 
    app-home h1 { color: blue }
\`                                
                                `
                            },
                            {
                                text:'Veja, os estilos são retornados por uma função simples. Note que o seletor app-home foi utilizado para definir o escopo de aplicação do estilo css. Como para r9x o nome do componente é a propriedade name da função fábrica que o define e elementos customizados no html5 possuem um tagName separado por "-", o seletor do componente depois do parse do seu nome ser aplicado torna-se app-home.'
                            },
                            {
                                text:'Quando o componente for carregado e a aplicação inicializar, será criado a tag app-home como elemento do componente. Portanto, somente os elementos html filhos de app-home sofrerão modificações visuais decorrente do estilo css aplicado.'
                            },
                            {
                                text: 'Esse é um padrão css simples que resolvem muitos problemas de escopo de estilização.'
                            },
                            {
                                text:'Pronto, agora o componente appHome importado em main.js será carregado e renderiado corretamente através do roteador da biblioteca.',
                                code: `
//main.js

/*...codigo omitido...*/
import { appHome } from './components/appHome/appHome.component'

/*...codigo omitido... */

const routes = {
    firstRoute: { hash: '#/', component: appHome },
    defaultRoute: { hash: '#/404', component: appNotFound },
    otherRoutes: [
        { hashExp: /^\#\/$/, component: appHome },
    ]
}

/*...codigo omitido...*/                                
                                `
                            },
                            {
                                text:'Alterne para o navegador e veja o resultado. Se tudo deu certo, agora a página principal (home) exibe o título appHome.'
                            }
                        ]
                    },
                    {
                        title:'Componentes reaproveitáveis',
                        paragraphs: [
                            {
                                text: 'A partir desse ponto, a coisa começa a ficar mais séria. Precisamos pensar em reaproveitamento de código. Podemos usar como exemplo o título presente em appHome, ele poderia ser um outro componente e receber o texto do título através de propriedades reativas. Vamos fazer isso agora.',
                            },
                            {
                                text: 'Crie dentro da pasta componentes a pasta appTitle e dentro dela os arquvivos do componente de título.',
                                code:`
appTitle.component.js
appTitle.template.js
appTitle.styles.js                                
                                `
                            },
                            {
                                text:'Hora de implementar o template do componente. Utilize o código abaixo:',
                                code: `
//appTitle.template.js

export default ({props, state}) => /*html*/ \`
<div>"teste"</div>
\`

`
                            },
                            {
                                text: 'Observe o seguinte treco de código:',
                                code: `
<h1 class="title \${props.object.style ? props.object.style : ''}">\${props.object.title}</h1>
                                `
                            },
                            {
                                text:'Estamos acessando as propriedades reativas através do objeto props que as contém. Observe que esse objeto possui a propriedade object que disponibiliza as propriedades como um objeto. Nesse caso estamos acessando, a propriedade title do objeto object.',
                            },
                            {
                                text: 'No momento é assim que r9x converte um texto simples em propriedades reativas. Essas propriedades serão fornecidas para o template através da tag do componente definida dentro dos templates de outros componentes. Logo mais veremos isso em prática.'
                            },
                            {
                                text:'Ainda observando o trecho acima, note que a avaliação dentro da propriedade html class verifica se um estilo customizado foi informado como propriedade. Em caso afirmativo esse estilo será aplicado, caso contrário nada ocorre. Isso nos permite definir multiplos estilos visuais para o componente. Dessa forma a interface do componente pode se comportar de maneira diferente dependendo de onde ele for instanciado e de acordo com o estilo fornecido para o template como propriedade. '
                            },
                            {
                                text:'Hora de definir os estilos do template. Utilize o código abaixo:',
                                code:`
//appTitle.styles.js

export default () => /*css*/ \`
    app-title .title-wrapper {
        margin-bottom:15px;
    }
    app-title .title-wrapper,
    app-title .title {
        display:block;
        float:left;
        width:100%;
    }

    app-title .title {
        padding:15px;
        border-bottom: 1px #ebebeb solid;
        font-size: 1.2em;
        text-transform: uppercase;
        text-align:left;
    }

    app-title .white { background:#fff; color: #6c31bf}
    app-title .purple { background:#6c31bf; color:#fff;}
\`                                
                                `
                            },
                            {
                                text:'O bloco acima não tem segredos. Definimos a estilização padrão e dois temas que serão aplicados se um estilo customizado for fornecido como propriedade para o template do componente. Falavamos disso, instantes através. Esses temas são "white & purple, definidos nas duas últimas linhas de css dos estilos do componente.'
                            },
                            {
                                text:'Hora de juntar tudo e definir o arquivo principal do componente.',
                                code:`
//appTitle.component.js

import template from './appTitle.template'
import styles from './appTitle'

const appTitle = () => {
    return {
        template,
        styles
    }
}

export {
    appTitle
}                                
                                `
                            },
                            {
                                text:'Perceba que apenas importamos o template e os estilos dentro de appTitle.component.js, e os retornamos através da factory appTitle. Por fim, expotamos a função construtora appTitle que agora pode ser importada pelo componente appHome.',
                                code:`
//appHome.compnente.js

import template from './appHome.template'
import styles from './appHome.styles'

import { appTitle } from '../appTitle/appTitle.component'

import { store } from '../../store'

const appHome = () => {

    const children = () => ({
        appTitle,
    })

    return {
        template,
        styles,
        children,
    }
    
}

export { appHome }                                
                                `
                            },
                            {
                                text:'Algumas coisas estão diferentes no componente appHome. Primeiro appTitle foi importado:',
                                code:`
import { appTitle } from '../appTitle/appTitle.component'

`
                            },
                            {
                                text:'Em seguida uma nova função (children) foi inserida dentro de appHome e esta função retornando um objeto que contém appTitle.',
                                code:`
    const children = () => ({
        appTitle,
    })                                
                                `
                            },
                            {
                                text:'Por fim, essa função children está sendo retornada junto com o template e seus estilos para factory appHome:',
                                code:`
    return {
        template,
        styles,
        children,
    }                                
                                `
                            },
                            {
                                text:'Quase tudo em r9x são factory functions. Children é uma fábrica que retorna os componentes filhos para serem instancidos através do componente pai. Nesse caso específico, appTitle passa a ser filho de appHome. Por isso, children foi inserida no escopo do componente e retornada como uma propriedade pela factory function appHome. É dessa forma que componenetes filhos são definidos em r9x.'
                            },
                            {
                                text: 'Uma vez definido um compnente filho através de children, o componente pai vai procurar em seu template a tag do componente filho para intanciá-lo. Para cada tag do componente filho encontrada no template do componente pai, uma nova instância do componente filho será criada e relacionada. Veja abaixo:',
                                code:`
//appHome.template.js

export default ({props, state}) => /*html*/ \`
    <app-title data-props="\{'title':'Vitrine', 'style':'purple'\}"></app-title>
\`

`
                            },
                            {
                                text:'Ao acessar a rota principal da aplicação, você perceberá que o componente title já está renderizado e exibindo o valor do título informado via propriedade e que o estilo purple também passado por propriedade foi aplicado.'
                            },
                            {
                                text:'A verdade é que ainda faremos mais alterações na home. O que faremos agora é definir a estrutura completa dessa página e ela nos servirá de guia para criar os demais componentes que a compoem. O código completo do template do componente appHome fica assim:',
                                code:`
/*appHome.template.js*/

export default ({ props, state }) => /*html*/ \`
    <div class="home-wrapper">
        <app-title data-props="{'title':'Vitrine', 'style':'purple'}"></app-title>
        <div class="movie-list">
            <app-title data-props="{'title':'Filmes', 'style':'white'}"></app-title>
            <app-search data-props="{'storeKey':'movieList', 'placeholder':'Buscar filmes'}"></app-search>
            <app-movie-list></app-movie-list>
        </div>
        <div class="user-list">
            <app-title data-props="{'title':'Clientes', 'style':'white'}"></app-title>
            <app-search data-props="{'storeKey':'userList', 'placeholder':'Buscar clientes'}"></app-search>
            <app-user-list> </app-user-list>
        <\ div>
        <div class="sidebar">
            <app-sidebar data-props="{'showButtons':true, 'buttons':['cancel', 'confirm']}"></app-sidebar> 
        </div>
    </div>
\`                             
`
                            },
                            {
                                text:'Precisamos criar mais 4 componentes de acordo com o códgo acima. Os componentes são appSearch, appMovieList, appUserList e appSidebar.'
                            },
                            {
                                text:'Faremos isso a partir da próxima sessão. Mas antes, precisamos introduzir o restante dos estilos do componente. O código completo fica assim:',
                                code:`
/*appHome.styles.js*/

export default () => /*css*/ \`
    app-home .home-wrapper {
        display:block;
        float:left;
        width:100%;
        padding:15px;
    }

    app-home .movie-list,
    app-home .user-list {
        display:block;
        float:left;
        width:calc(50% - 7.5px);
        padding:15px;
    }

    app-home .user-list {
        margin-left:15px;
    }

    app-home .sidebar {
        display:block;
        float:right;
        width:250px;
        position:relative;
    }
\`
`
                            }
                        ]
                    }
                ]
            },            
        ]
    }
})

export { store }