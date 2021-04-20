// Including requirements
const router = require('express').router();
const homeRoutes = require('./homeRoutes');
// !!! INCLUDE API ROUTES ONCE THEY'RE FINISHED !!!

router.use('/', homeRoutes);
// !!! INCLUDE API ROUTES ONCE THEY'RE FINISHED !!!

module.exports = router;