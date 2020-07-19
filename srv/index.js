import express from 'express';
import nodemailer from 'nodemailer';
import ejs from 'ejs';

export default (app, http) => {
  app.use(express.json());

  app.post('/send-email', async(req, res) => {

    console.log(req.body);

    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      auth: {
        user: 'danil17051998@yandex.ru',
        pass: 'gatzyotmvpypthcr'
      }
    });

    const data = await ejs.renderFile(__dirname + '/templates/mail.ejs', {
      name: req.body.name,
      phoneEmail: req.body.phoneEmail,
      message: req.body.message,
    });

    const mailOptions = {
      from: 'danil17051998@yandex.ru',
      to: 'danil17051998@yandex.ru',
      subject: 'Заявка с сайта Агровиза',
      html: data,
    };

    await transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.status(500).json({message: 'не удалось отправить сообщение'})
      } else {
        res.end();
      }
    });
  });
}