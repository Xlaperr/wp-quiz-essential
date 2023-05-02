const deleteTodo - await pool.query("delete from todo where id = ?", [

req-params.id

ll res.json()

return res.status(200).json((

"message": "ลบ ToDo '"
+ getTitle[e]to].title + ㆍㆍ สำเร็จ"

catch (err) (

console.log(err)

next(err)

res.send("DELETE a ToDo with id - $(req.params.id)'
PROBLEMS
OUTPUT
DEBUG CONSOLE JUPYTER
TERMINAL
app.get('/todo/:id', async (req, res, next) => (
try f
const [rows, fields] = await pool.query("SELECT * FROM todo WHERE id=?", [req.params.id])
res.json(rows[e])
catch (err) [
console.10g(err)
next(err)
app.delete('/todo/:id', async (req, res, next) => (
try (
const getTitle a await pool.query("select title from todo wher id -?", [
req-params.id
if
(IgetTitle[@][e]) f
return res.status(484).json(
"message" : "ไม่พบ ToDo ที่ต้องการลบ"
