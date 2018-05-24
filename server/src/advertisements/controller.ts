import { JsonController, Get, Param, Body, Post, HttpCode } from 'routing-controllers'
import Advertisement from './entity'

@JsonController()
export default class AdvertisementController {

    @Get('/advertisements/:id')
    getAdvertisements(
        @Param('id') id: number
    ) {
        return Advertisement.findOne(id)    
    }

    @Get('/advertisements')
    async allAdvertisements() {
      const advertisements = await Advertisement.find()
      return { advertisements }
    }

    @Post('/advertisements')
    @HttpCode(201)
        createAdvertisement(
        @Body() advertisement: Advertisement
    ) {
        return advertisement.save()
    }

}

//http post :4000/advertisements title=titel description=string picture=pica price:=8 email=string phonenumber:=5