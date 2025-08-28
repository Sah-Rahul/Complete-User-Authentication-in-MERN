import nodemailer from "nodemailer"
import "dotenv/config"

export const sendOtpMail = async(email, otp) =>{
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.NODEMAILER_EMAIL,
            pass:process.env.NODEMAILER_PASSWORD
        }
    })

    const mailOptions = {
        from:process.env.NODEMAILER_EMAIL,
        to:email,
        subject:'Password reset OTP',
        html:`<p>Your OTP for password reset is: <b>${otp}</b>. It is valid for 10 minutes.</p>`
    }

    await transporter.sendMail(mailOptions)
}