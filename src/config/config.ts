import dotenv from "dotenv"
import Path from "path";

dotenv.config({path:Path.join(__dirname,"../",".env")})

interface Config{
    HttpPort:  string;
    MongoHost: string;  
    MongoPort: number;
    MongoDatabase: string;
    MongoAuthDisable: boolean;
    NodeEnv:string;
}

let config: Config = {
    HttpPort: getConf("HTTP_PORT","3000"),
    MongoHost: getConf("MONGO_HOST",""),
    MongoPort:parseInt(getConf("MONOG_PORT","")),
    MongoDatabase:getConf("MONGO_DATABASE",""),
    MongoAuthDisable:true,
    NodeEnv:getConf("NODE_ENV","")
}


function getConf(name: string, def: string = ""):string{
    if(process.env[name]){
        return process.env[name] || ""
    }

    return def
}

export default config;
