import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'

const path = './books.json'

async function getBooks() {
  const data = await readFile(path, 'utf8')
  return JSON.parse(data)
}

createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const url = new URL(req.url, `http://${req.headers.host}`)
  const books = await getBooks()

  res.write(JSON.stringify(books))
  res.end()
}).listen(3000)