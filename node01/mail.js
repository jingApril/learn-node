"use strict";
const nodemailer = require("nodemailer");

// 创建发送邮件的对象
    let transporter = nodemailer.createTransport({
        host: "smtp.qq.com", // 发送方邮箱 qq
        port: 465, // 端口号
        secure: true, // true for 465, false for other ports
        auth: {
            user: '', // 发送方的邮箱地址
            pass: '', // mtp验证码
        },
    });
// 邮件信息
    let mailobj = {
            from: '"Fred Foo 👻" <>', // sender address
            to: "", // list of receivers
            subject: "", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
    }
  transporter.sendMail(mailobj,(err,data) => {
      console.log(err)
      console.log(data)
  });


    // setInterval(() => {
    //     transporter.sendMail(mailobj);
    // }, 2000)