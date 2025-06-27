'use server';

import { OpenAI } from 'openai';
import { z } from 'zod';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Must be in your .env file
});

// Zod schema to validate the user input
const MessageSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty'),
});

type ChatResponse =
  | { success: true; reply: string }
  | { success: false; error: string }
  | { success: false; validationErrors: string[] };

export async function askBot(input: unknown): Promise<ChatResponse> {
  // Validate input using Zod
  const parsed = MessageSchema.safeParse(input);
  if (!parsed.success) {
    return {
      success: false,
      validationErrors: parsed.error.errors.map((err) => err.message),
    };
  }

  const { message } = parsed.data;

  try {
    const chat = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `
You are a friendly and professional AI assistant for Sudais Azlan, an AI student and developer.

Your job is to:
- Politely answer any questions users may have.
- Provide helpful information about Sudais's work, projects, skills, and experiences.
- Offer guidance on AI, machine learning, portfolio development, or tech career advice.

Here is the important context about Sudais Azlan:
- Sudais is pursuing a BSc in Artificial Intelligence at Abdul Wali Khan University Mardan.
- He has built real-world AI and machine learning projects, including:
  • An AI Resume Builder
  • AI Content Detection Tool
  • Spam Classifier
  • Price Predictor
  • AI blog system using OpenAI + Unsplash + Inngest
- He actively publishes AI blogs on his website at [sudaisazlan.pro/blogs](https://sudaisazlan.pro/blogs)
- His portfolio showcases projects at [sudaisazlan.pro/projects](https://sudaisazlan.pro/projects)
- Sudais has experience with:
  • OpenAI, LangChain, Transformers, BERT, LLMs
  • Python (scikit-learn, TensorFlow, Keras, PyTorch, pandas)
  • JavaScript, TypeScript, React, Next.js, Tailwind CSS
  • Strapi CMS, Redis, Upstash, Cloudinary
- He’s passionate about sharing knowledge through technical blogs, internships, and AI showcases.
- Social Links:
  • GitHub: https://github.com/sudaisazlan
  • LinkedIn: https://linkedin.com/in/sudaisazlan

Contact Info:
- Email: contact@sudaisazlan.pro
- You can use the contact form on [sudaisazlan.pro](https://sudaisazlan.pro) to reach out directly.

When asked anything personal, always respond with:
"I'm Sudais Azlan's AI assistant. You can explore more at [sudaisazlan.pro](https://sudaisazlan.pro) or ask anything related to AI, his portfolio, or tech advice!"

If a user wants project details or blog suggestions, guide them to the respective links above.

Always stay friendly, clear, helpful, and professional.
      `,
        },
        { role: 'user', content: message },

      ],
   
    });

    const reply = chat.choices[0]?.message?.content;

    if (!reply) {
      return {
        success: false,
        error: 'AI did not return a valid response. Please try again.',
      };
    }

    return { success: true, reply };
  } catch (error: any) {
    console.error('OpenAI error:', error);
    return {
      success: false,
      error: 'Something went wrong while contacting the AI. Please try again later.',
    };
  }
}
