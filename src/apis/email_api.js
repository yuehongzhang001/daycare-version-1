import emailjs from "/node_modules/emailjs-com/cjs/index.js"

const YOUR_SERVICE_ID = "service_chv2uri"
const YOUR_TEMPLATE_ID = "template_mpm906g"
const userID = "user_7FCMRaTuH5ezXIUTGUUCV"
export default {
  sendEmail(templateParams) {
    return new Promise((resolve, reject) => {
        console.log("sendEmail")
      emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams,userID).then(
        function(response) {
            resolve(response)
        },
        function(error) {
            reject(error)
        }
      )
    })
  }
};
