import * as dotenv from 'dotenv'
dotenv.config()
import app from "./server"

const port = process.env.PORT


app.listen(`${port}`, (): void => {console.log(`server started at http://localhost:${port}`);
})