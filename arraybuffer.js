const axios = require('axios')
const fs = require('fs/promises')

async function main() {
  const fileUrl = 'https://picsum.photos/400'
  const fileName = `./downloads/image-${Date.now()}.png`

  const res = await axios({
    url: fileUrl,
    responseType: 'arraybuffer'
  })

  await fs.writeFile(fileName, res.data)

  console.log(`${fileName} saved`)
}

main()