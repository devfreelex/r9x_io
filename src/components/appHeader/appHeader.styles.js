export default () => /*css*/ `
    app-header .header-wrapper {
        display:block;
        float:left;
        width:100%;
        padding:15px;
        border-bottom:1px #ebebeb solid;
        background:#15171b;
    }

    app-header .container {
        display:block;
        width:100%;
        max-width:1180px;
        margin:0 auto;
    }

    app-header .container::after {
        display:block;
        width:100%;
        clear:both;
    }

    app-header .grid {
        display:block;
        float:left;
    }

    app-header .grid.logo {
        float:left;
        width:150px;      
    }

    app-header .grid.menu {
        float:right;
        width: calc(100% - 150px)
    }
`