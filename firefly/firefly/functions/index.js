const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(); // database connection for future use

var nodemailer = require("nodemailer");
exports.SendEmail = functions.https.onCall(data => {
  SendEmail(
    data.sendFrom,
    data.password,
    data.sendTo,
    data.subject,
    data.template,
    data.content,
    data.images,
    data.url,
    data.html
  );
  return {
    error: 0
  };
});
const GetAttachments = images => {
  let attachments = [];
  images.map(image =>
    attachments.push({ filename: image.title, path: image.add })
  );
  return attachments;
};
const SendEmail = async (
  sendFrom,
  password,
  sendTo,
  subject,
  template,
  content,
  images,
  url,
  html
) => {
  console.log(sendTo);
  let transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: false,
    auth: {
      type: "login",
      user: sendFrom,
      pass: password
    }
  });

  var mailOptions =
    content.length > 0
      ? await {
          from: sendFrom,
          to: sendTo,
          subject: "Come see my new work",
          template: template,
          content: content,
          html: html,
          date: new Date()
          // attachments: GetAttachments(images)
        }
      : await {
          from: sendFrom,
          to: sendTo,
          subject: subject,
          content: content,
          html: html,
          date: new Date()
          // attachments: GetAttachments(images)
        };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
