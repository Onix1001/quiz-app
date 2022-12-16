import Express from "express";
import router from "./router/index.js"

const app = Express()

app.use(router)
app.listen(5000, () => {
    console.log("server running...")
})
