import express from "express";
import bodyParser from "body-parser";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import cors from "cors";
import fetch from "node-fetch";

const corsOptions = {
  origin: "*",
  Credential: true,
  optionSuccessStatus: 200,
};

const appServer = express();

appServer.use(cors(corsOptions));
appServer.use(bodyParser.json());
appServer.use(bodyParser.urlencoded({ extended: false }));

const PostMail = async (Email) => {
  const AuthData = await fetchAuth();
  // console.log(AuthData[0]);
  const Auth2 = AuthData[0];

  const ClientId = Auth2.client_id;
  const ClientSecrect = Auth2.client_secret;
  const RedirectUrl = Auth2.redirect_url;
  const RefreshToken = Auth2.refresh_token;

  const oauth2Client = new google.auth.OAuth2(
    ClientId,
    ClientSecrect,
    RedirectUrl
  );
  oauth2Client.setCredentials({ refresh_token: RefreshToken });

  const MailSender = async (Eamil) => {
    try {
      const AccessToken = await oauth2Client.getAccessToken();
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "mj.khodadadi.96.test@gmail.com",
          clientId: ClientId,
          clientSecret: ClientSecrect,
          refreshToken: RefreshToken,
          accessToken: AccessToken,
        },
      });

      const mailDetails = {
        from: `${Eamil.userEmail}`,
        to: "mj.khodadadi.1996@gmail.com",
        subject: `${Eamil.Subject}`,
        text: `${Email.userName} ${Email.Message} ${Eamil.userEmail}`,
        html: `<h2> <i>${Email.userName}: </i></h2> <br> <br> <h3>${Email.Message} </h3> <br> <br> ${Eamil.userEmail}`,
      };

      const results = await transport.sendMail(mailDetails);
      return results;
    } catch (error) {
      return error;
    }
  };
  MailSender(Email).then((resp) => resp);
};

const fetchAuth = async () => {
  const resp = await fetch("http://localhost:3001/oauth");
  const data = await resp.json();
  return data;
};

appServer.post("/postEmail", (req, resp) => {
  if (!req.body || req.body === "")
    resp.status(500).send({ error: "update body" });
  else {
    const Email = {
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      Subject: req.body.Subject,
      Message: req.body.Message,
    };

    PostMail(Email).then((res) =>
      resp.status(200).send({ success: "Email sent ..", result: res })
    );
  }
});

appServer.listen(3002, () => console.log("Server is running on PORT 3002 .."));
