export default () => /*css*/ `
    app-home .home-wrapper {
        display:block;
        float:left;
        width:100%
    }

    app-home .container {
        display:block;
        width:100%;
        max-width:1180px;
        margin:0 auto;
    }

    app-home .container::after {
        content:'';
        display:block;
        width:100%;
        clear:both;
    }
`