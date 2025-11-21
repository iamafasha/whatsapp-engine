import  Route  from '@ioc:Adonis/Core/Route';

export default class DevicesController {

  public async index({request, view}){
    return view.render('devices.index');
  }

  public async create({request, view}){
    const referer = (request.headers().referer===undefined) ? Route.makeUrl('devices.index') : request.headers().referer;

    return view.render('devices.create', {referer: referer});
  }

  public static async initializeClient(client_id =  null){
    //import Client from whatsapp-web-client
    const { Client } = require('whatsapp-web.js');
    const client = new Client();  

      client.on('qr', (qr) => {
          console.log('QR RECEIVED', qr);
      });

      client.on('ready', () => {
          console.log('Client is ready!');
      });

      client.initialize();
  }

}
