import express, {Request, Response} from "express"; 
import morgan from "morgan";
import cors from "cors";
import routes from "../src/routes/index"
let app = express()

// middlewares
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(routes)
app.get('/status', (req: Request, res:Response) =>{
    res.json({
        status:"OK"
    })
})

export default app