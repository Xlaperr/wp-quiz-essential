
const express = require('express')
const app = express()
const port = 3088

const pool =require("./config/database")
app.use(express.urlencoded({extended:false} ))

app.get('/todo', async (req, res, next) => {
  const start_date = req.query.start_date
const end_date = req.query.end_date
try {
  if (start_date && end_date) {
var selectTodo = await pool.query("SELECT *, DATE_FORMAT(due_date, '%Y-Xm-kd') as due_date from todo where DATE_FORMAT(due_date, '%Y-Mm-%d') between ? and ? ", [
start_date, end_date}
else{
  var selectTodo = await pool.query("SELECT *, DATE_FORMAT(due_date, '%Y-%m-*d') as due_date from todo", [
start_date, end_date]
return res.status().json(selectTodo[e])
}
}
catch(err) {
  console. log(err)
next(err)
res.send('GET ToDo List')
app.post('/todo',async (req, res, next) =>{

const title= req.body.title
const description= req.body.description
var duedate= req.body.due_date
if (!title) {
return res.status(400).json()}
})
