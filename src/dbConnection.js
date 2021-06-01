/* eslint-disable no-unused-vars */
import Firebase from 'firebase'
import config from './config'
let app
if (!Firebase.apps.length) {
    app = Firebase.initializeApp(config)
    Firebase.analytics()
}
else {
    app = Firebase.app()
}
let db = app.database()
const HomePageTableRef = db.ref("HomePageTable")

export { HomePageTableRef }