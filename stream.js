const axios = require('axios')
const fs = require('fs')

async function main() {
  const fileUrl = 'https://picsum.photos/400'
  const fileName = `./downloads/image-${Date.now()}.png`

  const stream = fs.createWriteStream(fileName)

  const res = await axios({
    url: fileUrl,
    responseType: 'stream'
  })

  res.data.pipe(stream)

  stream.on('finish', () => console.log(`${fileName} saved`))
}

main()