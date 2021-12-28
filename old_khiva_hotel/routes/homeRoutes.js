const {Router} = require('express')
const router = Router();
const {
  getHomePage,
  getAboutPage,
  getRoomsPage,
  getContactPage,
  getServicesPage,
  setContactPage
} = require('../controllers/homeControllers')

router.get('/', getHomePage)
router.get('/about', getAboutPage)
router.get('/rooms', getRoomsPage)
router.get('/contact', getContactPage)
router.post('/contact', setContactPage)

router.get('/services',getServicesPage)

module.exports = router