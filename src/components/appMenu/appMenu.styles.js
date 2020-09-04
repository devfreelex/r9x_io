export default () => /*css*/`
    app-menu .menu-wrapper {
        display:block;
        float:left;
        width:100%;
        padding:15px;
        height:45px;
    }

    app-menu .list,
    app-menu .item,
    app-menu .link {
        display:block;
    }

    app-menu .list,
    app-menu .link {
        float:left;
    }

    app-menu .item {
        display:inline-block
    }

    app-menu .list {
        width:100%;
        text-align:right;
    }

    app-menu .link {
        padding-left:15px;
        text-decoration:none;
        color:#848d9f;
        font-size: .875em;
        transition: .2s ease-in;
        outline:0
    }

    app-menu .link:hover {
        color:#9c29dc
    }
`