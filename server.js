import express from 'express'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(process.cwd(), 'public')))

app.get('/embed/:videoId', (request, result) => {
  const videoId = request.params.videoId
  const originalQuery = new URLSearchParams(request.query)

  originalQuery.set('v', videoId)

  const youtubeHtmlPath = path.join(process.cwd(), 'public', 'youtube.html')

  result.sendFile(youtubeHtmlPath, {}, (error) => {
    if (error) {
      result.status(500).send('Error loading youtube.html')
    }
  })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})
