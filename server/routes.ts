import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { EmailService } from "./email";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  const emailService = new EmailService();

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      console.log("Contact form submission:", validatedData);
      
      // Send email using the email service
      await emailService.sendContactFormEmail(validatedData);
      
      res.json({ 
        success: true, 
        message: "Message sent successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error",
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
