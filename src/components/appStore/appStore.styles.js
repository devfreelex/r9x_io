export default () => {
    return /*css*/ `
        app-store .store-wrapper {
            display:block;
            float:left;
            width:100%;
        }

        app-store .container {
            display:block;
            width:100%;
            max-width:1180px;
            padding:15px;
            margin:0 auto;
        }

        app-store .container::after {
            content:'';
            display:block;
            float:left;
            width:100%;
        }
    `
}