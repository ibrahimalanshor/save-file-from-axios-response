const axios = require('axios')
const fs = require('fs')

async function main() {
    try {
        const imageUrl = 'https://picsum.photos/400'

        await fs.promises.unlink('test.png')

        const writer = fs.createWriteStream('test.png')

        const res = await axios({
            url: imageUrl,
            responseType: 'stream'
        })

        await new Promise((resolve, reject) => {
            res.data.pipe(writer)
                .on('finish', resolve)
                .on('error', reject)
        })

        console.log('finish')        
    } catch (err) {} finally {
        console.log('should called last')
    }
}

main()