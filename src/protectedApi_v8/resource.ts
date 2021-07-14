import { Router } from 'express'
export const userAuthKeyCloakApi = Router()
userAuthKeyCloakApi.get('/', async (req, res) => {
    const host = req.get('host')
    let redirectUrl = ''
    switch (host) {
        case 'igot-dev.in':
            redirectUrl = 'https://' + host + '/page/home'
            break
        case 'mdo.igot-dev.in':
            redirectUrl = 'https://' + host + '/app/home/welcome'
            break
        case 'spv.igot-dev.in':
            redirectUrl = 'https://' + host + '/app/home/directory'
            break
        case 'cbc.igot-dev.in':
            redirectUrl = 'https://' + host + '/app/home/welcome'
            break
        case 'cbp.igot-dev.in':
            redirectUrl = 'https://' + host + '/author/cbp/me'
            break
        default:
            redirectUrl = 'http://localhost:3000/app/home/directory'  // Test setup
            break
    }
    res.redirect(redirectUrl)
})
