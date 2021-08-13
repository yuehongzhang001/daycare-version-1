import emailjs from "/node_modules/emailjs-com/cjs/index.js"

const YOUR_SERVICE_ID = "service_chv2uri"
const YOUR_TEMPLATE_ID_Form = "template_mpm906g"
const userID = "user_7FCMRaTuH5ezXIUTGUUCV"

const YOUR_TEMPLATE_ID_MESSAGE = "template_762qsfo"
export default {
  sendFormByEmail(templateParams) {
    return new Promise((resolve, reject) => {
        console.log("sendEmail")
      emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID_Form, templateParams,userID).then(
        function(response) {
            resolve(response)
        },
        function(error) {
            reject(error)
        }
      )
    })
  },
  sendMessageByEmail(templateParams) {
    return new Promise((resolve, reject) => {
        console.log("sendEmail")
      emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID_MESSAGE, templateParams,userID).then(
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
