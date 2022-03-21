const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const SESSION_FILE_PATH = "./session.json";
const fs = require("fs");
let client;
let sessionData;
// User sin Session
const initSession = () => {
  console.log("No tenemos Session Guardada");
  client = new Client();
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
    console.log("QR RECEIVED", qr);
  });
  //   client.on("authenticated", (session) => {
  //     sessionData = session;
  //     console.log(sessionData);
  //     if(!sessionData) {
  //         console.log('sin sessin' );
  //         return
  //     }
  //     fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
  //       if (err) console.log(err);
  //     });
  //   });

  client.on("message", (message) => {
    console.log(message.body);
    message.reply(
      "Hola este es un mensaje auto generado , estamos trabajando en el boot de fran, en breve te contestare....  "
    );
  });
  client.initialize();
};

// User con session
const userLogger = () => {};

fs.existsSync(SESSION_FILE_PATH) ? userLogger() : initSession();
