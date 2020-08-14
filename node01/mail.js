"use strict";
const nodemailer = require("nodemailer");

// 创建发送邮件的对象
    let transporter = nodemailer.createTransport({
        host: "smtp.qq.com", // 发送方邮箱 qq
        port: 465, // 端口号
        secure: true, // true for 465, false for other ports
        auth: {
            user: '5628295@qq.com', // 发送方的邮箱地址
            pass: 'mvgricbgwvjwbgei', // mtp验证码
        },
    });
// 邮件信息
    let mailobj = {
            from: '"Fred Foo 👻" <5628295@qq.com>', // sender address
            to: "5628295@qq.com", // list of receivers
            subject: "2020", // Subject line
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