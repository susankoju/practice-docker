// let env_mode =process.env.ENV_MODE ||'dev';
let env_mode = "production";
let config={};
if(env_mode ==='dev'){
    config = {
        basename: '',
        dbname: '',
        host: '',
        port: '',

    };
}
    else{
    config = {
        // basename: 'react-messageall',
        basename: '',
        dbname: '',
        host: '',
        port: '',

    };
}

module.exports=config;
