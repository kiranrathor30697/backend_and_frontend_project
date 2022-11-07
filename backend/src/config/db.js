const mongoose = require('mongoose')

// mongoose.connect(`mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`)
mongoose.connect('mongodb+srv://kiranrathor:KiranRathor@kiran.ov8n8w8.mongodb.net/?retryWrites=true&w=majority')
.then(data=>console.log("connected"))
.catch(err=>console.log("=======",err))

// const mongoose = async() => {
//     try {
//         await mongo.connect('mongodb+srv://kiranrathor:KiranRathor@kiran.ov8n8w8.mongodb.net/?retryWrites=true&w=majority')
//         console.log('connected')
//     } catch (error) {
//         console.log(error)
//     }
// }

module.exports = { mongoose }