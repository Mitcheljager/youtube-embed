import express from 'express'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(process.cwd(), 'public')))

app.get('/embed/:videoId', (req, res) => {
  const videoId = req.params.videoId
  const originalQuery = new URLSearchParams(req.query)

  originalQuery.set('v', videoId)

  const youtubeHtmlPath = path.join(process.cwd(), 'public', 'youtube.html')

  res.sendFile(youtubeHtmlPath, {}, (err) => {
    if (err) {
      res.status(500).send('Error loading youtube.html')
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
