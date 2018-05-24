// src/index.ts
import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
// import PageController from './pages/controller'
import setupDb from './db'
import AdvertisementController from './advertisements/controller'

const app = createKoaServer({
  controllers: [
    AdvertisementController
  ]
})

setupDb()
  .then(_ =>
    app.listen(4000, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))