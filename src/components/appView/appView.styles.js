export default () => /*css*/ `
    app-view .view-wrapper {
        display:block;
        float:left;
        width:100%;
        padding-bottom:45px;
    }

    app-view .container {
        display:block;
        width:100%;
        max-width:1180px;
        margin:0 auto;
        padding-top:15px;
    }

    app-view .container::after {
        content:'';
        display:block;
        width:100%;
        clear:both;
    }

    app-view .tagline {
        display: block;
        float: left;
        width: 100%;
        padding: 15px;
        margin: 15px 0;
        border-radius: 4px;
        font-size: .875em;
        color: #667185;
        background: #f9f9f9;
        text-transform: uppercase;
        font-weight: 900;
    }

    app-view .paragraph {
        display:block;
        float:left;
        width:100%;
        padding:15px 0;
        line-height:1.5em;
        font-size: 1.2em;
        color:#667185;
    }
`