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
/*appHome.component.js*/
                                
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
                    },
                    {
                        title:'Buscas - appSearch',
                        paragraphs: [
                            {
                                text:'Essa aplicação exibirá através do componente appHome uma lista de filmes e clientes. Por isso, precisamos de uma forma eficiente para filtrar os filmes e os clientes e tornar mais fácil a vida do usuário que vai operar o app.'
                            },
                            {
                                text:'Destro da pasta components crie os arquivos:',
                                code:`
appSearch.component.js
appSearch.template.js
appSearch.stylessss.js
                                
`
                            },
                            {
                                text:'Comece implementando o template do componente.',
                                code:`
/*appSearch.template.js*/

export default ({props, state}) => /*html*/ \`
    <div class="search-wrapper">
        <input type="text" class="search-input" placeholder="\${props.object.placeholder}">
    </div>
\`                                
`
                            },
                            {
                                text:'Note que o template acessa a propriedade reativa "placeholder", essa propriedade define o placeholder do input da busca.'
                            },
                            { 
                                text:'Hora de definir os estilos do componente. O código css fica assim:',
                                code:`
export default () => /*css*/ \`
    app-search .search-wrapper {
        display:block;
        float:left;
        width:100%;
        padding:15px;
        margin-bottom:15px;
        border-radius:4px;
        background:#f9f9f9;
    }

    app-search .search-input {
        display:block;
        float:left;
        width:100%;
        padding:15px;
        border:0;
        border-bottom:2px #fff solid;
        border-radius:4px;
        outline:0;
        background:#fff;
        color:#666;
        text-transform: uppercase;
        font-size:.875em
    }

    app-search .search-input:focus {
        border-bottom: 2px #ebebeb solid;
    }
\`
`
                            },
                            {
                                text:'Não há segredos aqui. Esse é apenas um estilo css que você poderia escrever para formatar qualquer input de texto.'
                            },
                            {
                                text:'Agora importe o template e os estilos dentro de appSearch.component.js, o códgo fica assim:',
                                code:`
/*appSearch.component.js*/

import template from './appSearch.template.js'
import styles from './appSearch.styles.js'

const appSearch = () => {

    return {
        template,
        styles
    }

}

export { appSearch }

`
                            },
                            {
                                text:'É preciso implementar uma forma para o usuário interagir com o componente e realizar a filtragem dos dados. É possível fazer isso utilizando eventos. Veja o código:',
                                code:`
    const events = ({on, query, methods, directives}) => ({
        onType () {
            const input = query('.search-input')
            let value = ''

            on('keyup', [input], ({target}) => { 
                if(target.value) value = target.value
                methods.filterMovies({target})
            })
        }
    })

    `
                            },
                            {
                                text:'A factory events acima está criando um manipulador de eventos denominado onType. Ao ser executado após a renderização do template o evento será aplicado a tag alvo.'
                            },
                            {
                                text:'A factory events recebe um parâmtro que dá acesso a alguns itens importantes. Esses itens são:',
                                code:`
/*html*/
on: Função responsável por fazer o bind de eventos
query: Função responsável por buscar elementos no contexto do componente
methods: Um objeto contendo todos os métodos do componente
directives: Um objeto contendo todas as diretivas relacionadas ao componente

`
                            },
                            {
                                text:'Com os recursos acima podemos buscar elementos e adicionar eventos executando métodos do componente sempre que um desses eventos ocorrer. E exatamente isso que está acontecendo no código abaixo:',
                                code:`
onType () {
    const input = query('.search-input')
    let value = ''

    on('keyup', [input], ({target}) => { 
        if(target.value) value = target.value
        methods.filterMovies({target})
    })

}
                                `
                            },
                            {
                                text:'Primeiro, através da função query, obtemos o elemento do input. Em seguida declaramos value que armazenará o cache do valor digitado no input. Depois através da função on, o evento keyup é definido. Observe que o input selecionado é passado para essa função dentro de um array. Isso porque on manipula uma série de elementos de uma única vez. Em seguida é passado um callback para on que obtem o target do evento e armazena o valor da propriedade value do target dentro da variável de cache value. Por fim, o método filterMovies recebe o target e realiza a filtragem dos dados.'
                            },
                            {
                                text:'Óbvio, esse código não funciona ainda. Precisamos dicionar o método filterMovies. O código fica assim:',
                                code:`
const methods = ({props, state}) => ({

    filterMovies ({target}) {
        const { storeKey } = props.get().object
        const { value } = target
        const regex = new RegExp(\`\${ value }\`,'ig')

        const result = store.get()[storeKey].filter( item => {
            const itemKeys = Object.keys(item)
            return itemKeys.filter(key => item[key].toString().match(regex)).join('')
        })

        store.update((storeData) => {
            if(!storeData.hasOwnProperty('search')) storeData.search = {}
            storeData.search[storeKey] = result
        })

    }
})
                                `
                            },
                            {
                                text:'Primeiro adicionamos a factory de métodos "methods". Essa factory recebe um parâmetro contendo a propriedades reativas e o state local do componente.',
                                code: `
const methods = ({props, state}) => ({ })
                                `
                            },
                            {
                                text:'Declaramos no objeto retornado os métodos que vão decorar o componente. Por causa do clousure esses métodos possuem acesso a props e state.',
                                code:`
/*codigo omitido*/

{
    filterMovies ({target}) { }
}
                                `
                            },
                            {
                                text:'Dentro de filterMovies, obtemos a proriedade storeKey para selecionar a chave de dados a ser filtrada na store de dados que ainda não existe e precisa ser criada. Em seguida, value é extraído do target recebido como parametro. Por fim, value é transformado em uma expressão regular.',
                                code:`
const { storeKey } = props.get().object
const { value } = target
const regex = new RegExp(\`\${ value }\`,'ig')                                
                                `,
                            },
                            {
                                text:'Observe o treche a seguir:',
                                code: `
                                
const result = store.get()[storeKey].filter( item => {
    const itemKeys = Object.keys(item)
    return itemKeys.filter(key => item[key].toString().match(regex)).join('')
})

`
                            },
                            {
                                text:'O código acima acessa a chave da store dedados assim:',
                                code:`
store.get()[storeKey]

`
                            },
                            {
                                text:'Então, filter percode os objetos da chave selecionada na store:',
                                code: `
store.get()[storeKey].filter( item => {

})                                
`
                            },
                            {
                                text:'Por fim, caso a expressão regular avaliadora teste true para os objetos dentro da chave selecionada na store, filter retorna um array contendo esses objetos.',
                                code: `
const itemKeys = Object.keys(item)
return itemKeys.filter(key => item[key].toString().match(regex)).join('')                                

`
                            },
                            {
                                text:'Observe o seguinte código:',
                                code:`
store.update((storeData) => {
    if(!storeData.hasOwnProperty('search')) storeData.search = {}
    storeData.search[storeKey] = result
}) 

`
                            },
                            {
                                text:'O método update da store, recebe um callback que tem acesso aos dados da store e permite atualizá-los e notificar a todos os observadores da store.',
                                code: `
store.update((storeData) => { })

`
                            },
                            {
                                text:'No calback passado para update está sendo avaliado se existe a chave search na store. Se essa chave não existir, será criada dinâmicamente e em seguida a ela será abribuido o resultado a busca.',
                            code:`
if(!storeData.hasOwnProperty('search')) storeData.search = {}
storeData.search[storeKey] = result
                                `
                            },
                            {
                                text:'Chegou o momento de criar a store, pois, logo a diante será necessário observar as mudanças nos ddos da store para atualizar o state local dos componentes da aplicação.'
                            },
                            {
                                text:'Na raiz do projeto crie o arquivo store.js e insira dentro o código abaixo:',
                                code:`
import { storeFactory } from 'r9x_js'

const store = storeFactory({
    movieList: [
        { id: 1, title: 'Ultimos dias', description:'Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mé,'},
        {id:2, title:'Fim dos dias', description:'Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mé,'},
        {id:3, title:'Málevola', description:'Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mé,'},
        {id:4, title:'A rainha má', description:'Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mé,'},
    ],
    userList: [
        { id: 1, name: 'Rodrigo', lastName:'Rocha', cpf:'9995586655', movies:[] },
        { id: 2, name: 'Roberto', lastName:'Montana', cpf:'6665544788', movies:[] },
        { id: 3, name: 'Rafaela', lastName:'Fontes', cpf:'2254447895', movies:[] },
        { id: 4, name: 'Tatiana', lastName:'Alvarez', cpf:'3321145589', movies:[] },        
    ],
    operation: {
        client: null,
        movie: null
    },
})

export { store }                                
                                `
                            },
                            {
                                text:'Observe que r9x disponibiliza uma função "storeFactory" para criar a store observável. Em aplicações mais complexa multiplas stores podem ser criadas.',
                            },
                            {
                                text:'storeFactory recebe um objeto que contém as chaves de dados da store  sendo criobservávelada e a retorna.'
                            },
                            {
                                text:'Por fim, a store criada é exportada e pode ser observada por qualquer componente. Mas, para isso o componente precisa importá-la em suas dependências. Faremos isso no componente appSearch.'
                            },
                            {
                                text: 'o códgo completo do componente fica assim:',
                                code: `
/*appSearch.component.js*/

import template from './appSearch.template'
import styles from './appSearch.styles'
import { store } from '../../store'

const appSearch = () => {

    const events = ({on, query, methods, directives}) => ({
        onType () {
            const input = query('.search-input')
            let value = ''

            on('keyup', [input], ({target}) => { 
                if(target.value) value = target.value
                methods.filterMovies({target})
            })

        }
    })

    const methods = ({props, state}) => ({
        getSelector (input) {
            return input.getAttribute('key')
        },

        filterMovies ({target}) {
            const { storeKey } = props.get().object
            const { value } = target
            const regex = new RegExp(\`\${ value }\`,'ig')

            const result = store.get()[storeKey].filter( item => {
                const itemKeys = Object.keys(item)
                return itemKeys.filter(key => item[key].toString().match(regex)).join('')
            })

            store.update((storeData) => {
                if(!storeData.hasOwnProperty('search')) storeData.search = {}
                storeData.search[storeKey] = result
            })

        }
    })

    return {
        template,
        styles,
        events,
        methods,
    }
}

export { appSearch }
                                
`
                            },
                            {
                                text:'Na próxima sessão, criaremos os componentes appMovieList e appMovie. Esses componentes são responsáveis por listar os filmes e exibir o resultado da filtragem realizada pelo componente appSeaarch.'
                            }
                        ]
                    },
                    {
                        title:'appMovieList - Listando os filmes da store',
                        paragraphs: [
                            { text:'O componente appMovieList deve exibir a lista de filmes através do componente filho appMovie e garantir que a view seja atualizada sempre e somente quando a store de dados sofrer alterações.'},
                            {
                                text:'Crie os arquivos abaixo dentro da pasta appMovieList na pasta componentes:',
                                code:`
appMovieList.template.js                                
appMovieList.styles.js                                
appMovieList.component.js       

`
                            },
                            {
                                text:'No arquivo de template insira o código abaixo:',
                                code:`
/*appMovieList.template.js*/

export default ({props, state}) => {

    const repeat = (template, dataArr) => {
        return dataArr.map(item => template(item)).join('')
    }

    const movieTpl = (movie) => /*html*/ \`
        <app-movie data-props="{'movieId': '\${movie.id}'}"></app-movie>
    \` 

    return /*html*/ \`
        <div class="movie-list-wrapper">
            \${repeat(movieTpl, state.movieList)}    
        </div>
    \`
}

`
                            },
                            {
                                text:'Observe o trecho abaixo:',
                                code:`
    const repeat = (template, dataArr) => {
        return dataArr.map(item => template(item)).join('')
    }

`
                            },
                            {
                                text: 'A função repeate tem o dever de repetir um fragmento de template baseado em um array de dados e retornar as repetiçoes desse fragmento todas de uma só vez.'
                            },
                            {
                                text:'No trecho abaixo, criamos um fragmeno de template que contém a tag do componente filho appMovie e essa tag recebe uma propriedade reativa movieId que mais tarde será utilizada para selecionar um filme a ser exibido por cada uma das repetições do componente appMovie.',
                                code: `
const movieTpl = (movie) => /*html*/ \`
    <app-movie data-props="{'movieId': '\${movie.id}'}"></app-movie>
\` 
`
                            },
                            {
                                text:'Por fim, o código abaixo utiliza o fragmento de template criado anteriormente e a função repeat para repetir o componente appMovie lhe fornecendo a propriedade reativa movieId.',
                                code:`
return /*html*/ \`
    <div class="movie-list-wrapper">
        \${repeat(movieTpl, state.movieList)}    
    </div>
\`                                
`
                            },
                            {
                                text:'hora de criar mais um css clichê para estilizar o componente appMovieList.',
                                code: `
/*appMovieList.styles.js*/

export default () => /*css*/ \`
    app-movie-list .movie-list-wrapper {
        display:block;
        float:left;
        width:100%;
    }
\`

`
                            },
                            {
                                text:'Chegou o momento de implementar a lógica do componente. Utilize o código abaixo:',
                                code: `
import template from './appMovieList.template'
import styles from './appMovieList.styles'

import { appMovie } from '../appMovie/appMovie.component'

import { store } from '../../store'

const appMovieList = () => {

    const state = {
        movieList: store.get().movieList,
    }

    const children = () => ({
        appMovie
    })


    const hooks = ({ state, methods }) => ({
        beforeOnInit() {
            store.subscribe(({ search }) => {
                const movieList = search?.movieList
                const hasChanges = methods.hasChanges(state.get().movieList, movieList)
                if(hasChanges && movieList) state.set({ movieList })
            })
        }
    })

    const methods = () => ({

        hasChanges(oldState, newState) {
            const oldStateJson = JSON.stringify(oldState)
            const newStateJson = JSON.stringify(newState)
            return oldStateJson !== newStateJson
        }       

    })

    return {
        state,
        template,
        styles,
        children,
        hooks,
        methods
    }
}

export { appMovieList }
                                `
                            },
                            {
                                text:'Observe que importamos o template, os estilos, a store de dados e o componente filho appMovie do qual appMovieList depende para exibir cada um dos filmes.',
                                code:`
import template from './appMovieList.template'
import styles from './appMovieList.styles'

import { store } from '../../store'
import { appMovie } from '../appMovie/appMovie.component'

`
                            },
                            {
                                text:'Em seguida o state local do componente foi declarado.',
                                code:`
const state = {
    movieList: store.get().movieList,
}
                                `
                            },
                            {
                                text: 'Após o state ser declarado, registramos o componente appMovie como filho de appMovieList',
                                code:`
const children = () => ({
    appMovie
})      

`
                            },
                            {
                                text:'Observe que também registramos os hooks e os métodos para este componente.',
                                code:`
const hooks = ({ state, methods }) => ({
    beforeOnInit() {
        store.subscribe(({ search }) => {
            const movieList = search?.movieList
            const hasChanges = methods.hasChanges(state.get().movieList, movieList)
            if(hasChanges && movieList) state.set({ movieList })
        })
    }
})

const methods = () => ({

    hasChanges(oldState, newState) {
        const oldStateJson = JSON.stringify(oldState)
        const newStateJson = JSON.stringify(newState)
        return oldStateJson !== newStateJson
    } 
                            

`
                            },
                            {
                                text: 'Veja que o componente se inscreve para ouvir mudanças na store através da função subscribe da própria store que recebe um objejo "search" que pode conter uma lista de filmes filtrados pelo componente de busca.',
                                code:`
    beforeOnInit() {
        store.subscribe(({ search }) => {
            const movieList = search?.movieList
            const hasChanges = methods.hasChanges(state.get().movieList, movieList)
            if(hasChanges && movieList) state.set({ movieList })
        })
    }                                
                                `
                            },
                            {
                                text:'No trecho de código a seguir, o componente identifica que houve uma mudança nos dados da store e verifica se os dados do state local estão diferentes dos novos dados presentes na store. Caso esteja o componente atualiza o state local e consequentemente seu template com os novos dados da store.',
                                code:`
const movieList = search?.movieList
const hasChanges = methods.hasChanges(state.get().movieList, movieList)
if(hasChanges && movieList) state.set({ movieList })
                                `
                            },
                            {
                                text:'Para detectar diferenças no state local, o componente faz uso da função hashChanges que compara o state local com a store.',
                                code: `
hasChanges(oldState, newState) {
    const oldStateJson = JSON.stringify(oldState)
    const newStateJson = JSON.stringify(newState)
    return oldStateJson !== newStateJson
}          

`
                            },
                            {
                                text: 'Por fim, a factory appMovieList retorna todos os recursos necessários para criar um componente e é exportada para ser usada no momento adequado.',
                                code: `

/*codigo omitido*/

const appMovieList = () => {

/*codigo omitido*/

    return {
        state,
        template,
        styles,
        children,
        hooks,
        methods
    }
}

export { appMovieList }

                                `
                            },
                            {
                                text: 'Agora é uma boa hora para importar os componentes appTitle, appSearch e appMovieList em appHome. Embora não seja possível testar a aplicação sem criar o componente appMovie.',
                                code:`
                                
/*appHome.component.js*/

import template from './appHome.template.js'
import styles from './appHome.styles.js'

import { appTitle } from '../appTitle/appTitle.component'
import { appSearch } from '../appSearch/appSearch.component'
import { appMovieList } from '../appMovieList/appMovieList.component'

const appHome = () => {

    const children = () => ({
        appTitle,
        appSearch,
        appMovieList,
    })
    
    return  {
        template,
        styles
    }

}

export { appHome }  
                              `
                            },
                            {
                                text: 'Na próxima sessão criaremos o componente appMovie e então poderemos testar a aplicação parcialmente.'
                            }
                        ]
                    },
                    {
                        title:'AppMovie - Exibindo dados diferentes para cada instância.',
                        paragraphs: [
                            {
                                text: 'Cada vez que o componente appMovie é renderizado, uma nova instância é criada. Como o state é local, os dados presentes no state de cada instância são independentes.'
                            },
                            {
                                text: 'Dentro da pasta components cria a pasta appMovie e dentro dela os arquivos abaixo:',
                                code: `
/*components\/appMovie/*                                

appMovie.component.js
appMovie.template.js
appMovie.styles.js
                                `
                            },
                            {
                                text:'Comece definindo o template do componente appMovie: ',
                                code:`
/*appMovie.template.js*/

export default ({props, state, methods}) => {

    if (!methods.hasMovies()) return ''
    const movie = methods.getMovie(props.object.movieId)
    const notHaveButtons = () => props.object.hideButtons && props.object.hideButtons === true

    const buttonsTpl = () => {
        if (notHaveButtons()) return ''
        return /*html*/ \`
            <app-mark-to data-props="{'type':'movie', 'movieId':'\${props.object.movieId}'}"></app-mark-to>
        \`
    }

    return /*html*/ \`
    <div class="movie-wrapper \${methods.isSelected(props.object.movieId) && !notHaveButtons() ? 'selected' : ''}">
        <div class="title">\${movie.title}</div>
        <div class="description">\${movie.title} - \${movie.description}</div>
        <div class="buttons">
            \${buttonsTpl()}
        </div>
    </div>
\`
}

                                `
                            },
                            {
                                text: 'Observe que dessa vez, o template recebe a propriedade methods. Isso é muito útil quando o template precisa de lógica adicional para fazer validações ou obter dados computados.'
                            },
                            {
                                text:'Como o template recebe a propriedade methods, a função getMovie pode ser acessaa para recuperar os dados que o template deve exibir. Esses dados são armazenados na variavel "movie".'
                            },
                            {
                                text: 'No trecho de código abaixo,  a funçao notHaveButtons verifica se o fragmento de template "buttonsTpl" declarado logo abaixo dela deve ser exibido.',
                                code:`
    const notHaveButtons = () => props.object.hideButtons && props.object.hideButtons === true

    const buttonsTpl = () => {
        if (notHaveButtons()) return ''
        return /*html*/ \`
            <app-mark-to data-props="{'type':'movie', 'movieId':'\${props.object.movieId}'}"></app-mark-to>
        \`
    }                                
                                `
                            },
                            {
                                text:'Veja que no fragmento de template de botões "buttonsTpl" está contido o componente appMarkTo:',
                                code:`
<app-mark-to data-props="{'type':'movie', 'movieId':'\${props.object.movieId}'}"></app-mark-to>                                
                                `
                            },
                            {
                                text:'Esse componente recebe através de propriedades reativas (type & movieId) informações que serão úteis na hoje de definir que filmes estão sendo alugados. Logo adiante precisaremos criar esse componente. Mas, por equanto pode ignorá-lo.'
                            },
                            {
                                text:'Por fim, um conjunto de tags do fragmento principal do template é retornado.',
                                code:`
    return /*html*/ \`
    <div class=”movie-wrapper \${methods.isSelected(props.object.movieId) && !notHaveButtons() ? 'selected' : ''}”>
        <div class=”title”>\${movie.title}</div>
        <div class=”description”>\${movie.title} - \${movie.description}</div>
        <div class=”buttons”>
            \${buttonsTpl()}
        </div>
    </div>
\`                                
                                `
                            },
                            {
                                text: 'Observe o trecho de código:',
                                code: `
<div class="movie-wrapper \${methods.isSelected(props.object.movieId) && !notHaveButtons() ? 'selected' : ''}">
                                `
                            },
                            {
                                text:'Esse trecho de código valida se os dados do componente foram marcados para locação e se o componente está exibindo botões de controle ou não. Caso tenha botões definidos, o seletor selected será aplicada ao template. Parece estranha a segunda validação. Porém, assim que o componente sidebar for implementado essa validação fará total sentido.'
                            },
                            {
                                text: 'Hora de aplicar os estilos do componente:',
                                code:`
/*appMovie.template.js*/

export default () => /*css*/ \`

    app- movie.movie - wrapper {
        display: block;
        float: left;
        width: 100 %;
        padding: 15px;
        margin- bottom: 15px;
        border- radius: 4px;
        border: 1px #f7f6f8 solid;
        background:#fff;
        box- shadow: 3px 3px 3px #f4f3f6
    }

    app- movie.selected { border- color:#2ad58e}

    app - movie.title {
        font - weight: 700
    }

    app - movie.title,
        app - movie.description {
        display: block;
        float: left;
        width: 100 %;
        padding - bottom: 15px;
        border - bottom: 1px #ebebeb solid;
        color:#666;
        font - size: 1em;
        text - transform: uppercase;
        line - height: 1.5em
    }

    app - movie.description {
        text - transform: none;
        padding - top: 15px;
        border - bottom: none;
        font - weight: 500
    }

    app - movie.buttons {
        display: block;
        float: left;
        width: 100 %;
        padding - top: 15px;
        text - align: right;
    }
\`

                                `
                            },
                            {
                                text:'Agora utilize o código abaixo para implementar o componente.',
                                code: `
/*appMovie.component.js*/

import template from './appMovie.template'
import styles from './appMovie.style'
import { appMarkTo } from '../appMarkTo/appMarkTo.component'
import { store } from '../../store'

const appMovie = () => {

    const state = {
        movieList: store.get().movieList,
        selected: false
    }

    const children = () => ({
        appMarkTo
    })

    const hooks = ({methods}) => ({

        beforeOnInit() {
            store.subscribe((payload) => {
                methods.movieInOperation(payload) ? methods.selectMovie() : methods.unselectMovie()
            })
        },        

    })

    const methods = ({props, state}) => ({

        getMovie (movieId) {
            const { movieList } = state.get()
            return movieList.find( movie => +movie.id === +movieId)
        },

        hasMovies () {
            const { movieList } = state.get()
            return movieList.length
        },

        isSelected(movieId) {
            const { operation } = store.get()
            return (operation.movie !== null && +operation.movie.id === +movieId)
        },

        selectMovie() {
            state.set({ selected: true })
        },
        unselectMovie() {
            state.set({ selected: false })
        },

        movieInOperation(dataStore) {
            const { operation } = dataStore
            const { object } = props.get()
            return operation.movie !== null && +operation.movie.id === +object.movieId
        }

    })

    return {
        state,
        template,
        styles,
        children,
        hooks,
        methods,
    }
}

export { appMovie }

                                `
                            }, {
                                text:'Parece que muito está acontecendo e é verdade. Mas todas as operações realizadas são simples.'
                            },
                            {
                                text:'Primeiro importamos as dependências do componente, incusive o componente filho appMarkTo e a store',
                                code: `
import template from './appMovie.template'
import styles from './appMovie.style'
import { appMarkTo } from '../appMarkTo/appMarkTo.component'
import { store } from '../../store'                                
                                `
                            },
                            {
                                text: 'Logo depois o state local é declarao:',
                                code: `
const appMovie = () => {
    const state = {
        movieList: store.get().movieList,
        selected: false
    }    
}                                
                                `
                            },
                            {
                                text: 'Na sequência, appMovie registra appMarkTo como filho.',
                                code: `
const children = () => ({
    appMarkTo
})                                
                                `
                            },
                            {
                                text: 'AppMovie também registra o hook beforeOnInit e o utiliza para ouvir as mudanças na store de dados.',
                                code: `
const hooks = ({methods}) => ({

    beforeOnInit() {
        store.subscribe((payload) => {
            methods.movieInOperation(payload) ? methods.selectMovie() : methods.unselectMovie()
        })
    },        

})                                
                                `
                            },
                            {
                                text:'Veja, toda vez que uma mudança ocorrer na store, o callback passado para store.subscribe será executado e então o método movieInOperation receberá os novos dados da store. Esse método verifica se existe um filme registrado para uma operação de locação na store.'
                            },
                            {
                                text: 'A store possue a propriedade opertaion e caso um filme seja registrado na chave movie de operation, movieInOperation retornará true o que permite a execução do método selectMovie que destacará o layoute do componente selecionado. Agora, caso não exista um filme, unslectMovie vai garantir que nenhum template seja destacado.'
                            },
                            {
                                text:'Esse métodos só podem ser acessados pelos hooks, porque foram declarados através da factory methods dentro do componente.',
                                code: `
   const methods = ({props, state}) => ({

        getMovie (movieId) {
            const { movieList } = state.get()
            return movieList.find( movie => +movie.id === +movieId)
        },

        hasMovies () {
            const { movieList } = state.get()
            return movieList.length
        },

        isSelected(movieId) {
            const { operation } = store.get()
            return (operation.movie !== null && +operation.movie.id === +movieId)
        },

        selectMovie() {
            state.set({ selected: true })
        },
        unselectMovie() {
            state.set({ selected: false })
        },

        movieInOperation(dataStore) {
            const { operation } = dataStore
            const { object } = props.get()
            return operation.movie !== null && +operation.movie.id === +object.movieId
        }

    })                                
                                `
                            },
                            {
                                text:'Os três primeiros métodos declarados no bloco acima são utilizados pelo template. Já falamos sobre eles. Já os métodos selectMovie e unselectMovie, são chamados para atualizar o state caso seja necessário. Por fim, o método movieInOperation é quem define qual dos dois métodos executar.'
                            },
                            {
                                text: 'Como o componente escuta as mudanças nos dados da store, caso state.set seja chamado para atualizar o state em conformidade com os dados provenientes da store, então o template do componente será atualizado.'
                            },
                            {
                                text:'Na próxima sessão será criado o componente appMarkTo.'
                            }
                        ]
                    },
                    {
                        title:'AppMarkTO - Registrando operções de locação',
                        paragraphs: [
                            {
                                text: 'O componente appMarkTo é reponsável por criar uma operação de locação e marcar os filmes para ela.'
                            },
                            {
                                text: 'Crie uma nova pasta "appMarkTo" dentro da pasta components e dentro dela os arquivos abaixo:',
                                code:`
/*components/appMarkTo*/

appMarkto.componente.js
appMarkTo.template.js
appMarkTo.styles.js                                
                                `
                            },
                            {
                                text:'Dentro do arquivo de template do componente introduza o código abaixo:',
                                code: `
/*appMarkTo.template.js*/

export default ({props, state}) => /*html*/ \`
    <div class="mark-to-wrapper">
        <button class="btn-mark">Selecionar</button>
    </div>
\`
`
                            },
                            {
                                text: 'O template desse componente é realmente simples. Possue apenas tags de marcação. Aproveite e implemente os estilos do componente.',
                                code: `
/*appMarkTo.styles.js*/

export default () => /*css*/ \`
    app-mark-to .mark-to-wrapper {
        display:inline-block;
    }

    app-mark-to .btn-mark {
        display: block;
        float: left;
        width: 100%;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: .875em;
        text-align: center;
        border: 1px #2ad58e solid;
        color: #2ad58e;
        background: #f7f7f8;
        text-decoration: none;
        outline: none;
        transition: .2s ease-in;
        cursor: pointer;
    }

    app-mark-to .btn-mark:hover {
        border: 1px #2ad58e solid;
        color: #fff;
        background: #2ad58e;        
    }

\`                                
`
                            },
                            {
                                text:'Os estilos também são bem simples e apenas adicionam um comportamento visual elegante.'
                            },
                            {
                                text: 'Hora de implementar o componente.',
                                code:`
/*appMarkTo.componente.js*/

import template from './appMarkTo.template'
import styles from './appMarkTo.styles'
import { store } from '../../store'

const appMarkTo = () => {

    const events = ({query, on, methods}) => ({
        
        onClickToSelect () {
            const btn = query('button')
            on('click', [btn], (e) => {
                methods.setOperation()
            })
        }
        
    })

    const methods = ({props, state}) => {

        const setUserOperation = (userId) => {
            store.update((dataStore) => {
                const user = dataStore.userList.find( user => +user.id === +userId)
                dataStore.operation.client = user
            })

        }

        const setMovieOperation = (movieId) => {
            store.update((dataStore) => {
                const movie = dataStore.movieList.find(movie => +movie.id === +movieId)
                dataStore.operation.movie = movie
            })

        }

        const setOperation = () => {
            const { object } = props.get()
            if(object.type && object.type === 'user') return setUserOperation(object.userId)
            if(object.type && object.type === 'movie') return setMovieOperation(object.movieId)
        }

        return { setOperation }
    }

    return {
        template,
        styles,
        events,
        methods
    }

}

export {
    appMarkTo
}
                                `
                            },
                            {
                                text:'Observe que primeiro importamos as dependências do componente:',
                                code: `
import template from './appMarkTo.template'
import styles from './appMarkTo.styles'
import { store } from '../../store'                                
                                `
                            },
                            {
                                text:'Na sequência, dentro da factor appMarkTo foram declarados os eventos do componente.',
                                code:`
const events = ({query, on, methods}) => ({
    
    onClickToSelect () {
        const btn = query('button')
        on('click', [btn], (e) => {
            methods.setOperation()
        })
    }
    
})                                
                                `
                            },
                            {
                                text:'Quando o evento de click ocorrer no botão do componente, uma operação será criada. Veja os métodos do componente.',
                                code: `
    const methods = ({props, state}) => {

        const setUserOperation = (userId) => {
            store.update((dataStore) => {
                const user = dataStore.userList.find( user => +user.id === +userId)
                dataStore.operation.client = user
            })

        }

        const setMovieOperation = (movieId) => {
            store.update((dataStore) => {
                const movie = dataStore.movieList.find(movie => +movie.id === +movieId)
                dataStore.operation.movie = movie
            })

        }

        const setOperation = () => {
            const { object } = props.get()
            if(object.type && object.type === 'user') return setUserOperation(object.userId)
            if(object.type && object.type === 'movie') return setMovieOperation(object.movieId)
        }

        return { setOperation }
    }                                
                                `,
                            },
                            {
                                text: 'Note que setOperation acessa as propriedades reativas no caso a propriedade type para definir que tipo de operação de relacionamento está sendo criada.'
                            },
                            {
                                text: 'Caso a propriedade type seja "user" a função setUserOperation obterá o usuário através do id de usuário fornecido através das propriedades reativas. Caso type seja movie a mesma lógica se aplica, mas, obtendo um filme ao invés de um usuário e a função executa será setMovieOperation.'
                            },
                            {
                                text: 'Você deve ter notado uma diferença de sintaxe na declaração dos métodos desse componente. Isso acontece porque setOperation precisa acessar outros métodos no mesmo escopo. Então ao invés de retornar logo de inicio um objeto com os métodos dentro, foi melhor somente no fim da declaração dos métodos retornar um objeto literal criado manualmente. Veja abaixo uma comparação entre as duas técnicas.',
                                code:`
/*Primeira forma*/
const methods = () => ({
    methodsInside () {}
})

/*Segunda Forma*/
const methods = () => {

    const methodInClousure = () => {}

    return {
        methodInclousure
    }
}
                                `
                            },
                            {
                                text: 'Como o componente que acabamos de criar já foi importado dentro de appMovie, você não precisa fazer mais nada. Pode testar a aplicação.'
                            },
                            {
                                text:'A exibição e filtragem de filmes já funciona corretamente, mas, ainda precisamos aplicar uma lógica muito semelhante para exibir e filtrar os clientes. Por isso, na próxima sessão criaremos os componentes appUserList e appUser.'
                            }                        
                        ]
                    }
                ]
            },            
        ]
    }
})

export { store }