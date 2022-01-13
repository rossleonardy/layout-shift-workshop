import express from 'express'
import faker from '@faker-js/faker'
import cors from 'cors'
import { createWordMark } from './wordmark'

const app = express()
const port = 8787

const SLOW = process.env.SLOW === 'true'
const RANDOM = process.env.RANDOM === 'true'

if (SLOW) {
  app.use((req, res, next) => {
    const delay = (faker.datatype.number(3) + 1) * 500 // 500 to 2000 ms
    setTimeout(() => {
      next()
    }, delay)
  })
}

const seedFromUuid = (uuid: string) => Array.from(uuid, (x) => x.charCodeAt(0)).reduce((prev, curr) => prev+curr)

interface Offer {
  uuid: string
  flag: string
  amount: string
  term: string
  monthly: string
  callouts: string[]
}

const createOffer: (uuid: string) => Offer = (uuid) => {
  faker.seed(seedFromUuid(uuid))
  const inThousands = faker.datatype.number(998) + 1
  const amount = `$${inThousands}K`
  const termRaw = faker.datatype.number(19) + 1
  const term = `${termRaw} years`
  const monthly = `$${((inThousands * 1000)/(termRaw * 12)).toFixed(2)}`

  return {
    uuid,
    flag: `Recommended for ${faker.vehicle.manufacturer()} owners`,
    amount,
    term,
    monthly,
    callouts: [
      `Good for ${faker.name.jobDescriptor()}`,
      `${faker.datatype.number(98) + 1}% applications accepted`
    ]
  }
}

app.use(cors())

app.use('/assets', express.static('assets'))

app.get('/offerList', (req, res) => {
  if (!RANDOM) {faker.seed(123)}
  const size = +(req.query.size ?? 10)
  const uuids = Array(size).fill(undefined, 0).map(() => faker.datatype.uuid())
  res.send(uuids)
})

app.get('/headlineContent', (req, res) => {
  res.send({
    headline: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    subhead: `An unknown printer took a galley of type and scrambled it to make a type specimen book.`
  })
})

app.get('/offer/:uuid', (req, res) => {
  const uuid = req.params.uuid
  if (typeof uuid === 'string') {
    res.send(createOffer(uuid))
  } else {
    res.status(500).send()
  }
})

app.get('/wordmark/:uuid', (req, res) => {
  res.send(createWordMark(seedFromUuid(req.params.uuid)))
})

app.listen(port, () => {
  console.log('Listening')
})
