import nodemailer from 'nodemailer';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Email service configuration
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });
  }

  async sendContactFormEmail(data: ContactFormData): Promise<void> {
    const { name, email, message } = data;

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'ommprakash0176@gmail.com',
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; text-align: center; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #8b5cf6; margin-bottom: 5px;">Contact Details:</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #8b5cf6; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #8b5cf6;">
              <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
            <p>This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        ---
        This message was sent from your portfolio contact form.
      `
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Contact form email sent successfully');
    } catch (error) {
      console.error('Error sending contact form email:', error);
      throw new Error('Failed to send email');
    }
  }

  // Test email connection
  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('Email service connection verified');
      return true;
    } catch (error) {
      console.error('Email service connection failed:', error);
      return false;
    }
  }
}