// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ request, auth, response, view}) {

    //if post request try login or display login page
    if (request.method() === 'POST') {
      const email = request.input('username')
      const password = request.input('password')
      await auth.use('web').attempt(email, password)
      response.redirect().toRoute('home')
    }

    return view.render('auth.login')
  }
}
