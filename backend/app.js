import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"
const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use("/user",userRouter)

export { app }