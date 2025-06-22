'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { ContactFormInput, sendContactEmail } from '@/actions/resend';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
});

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInput) => {
    setLoading(true);
    const result = await sendContactEmail(data);

    if (result.success) {
      toast.success('Message sent successfully');
      reset();
    } else if ('validationErrors' in result) {
      toast.error('Validation failed');
      for (const key in result.validationErrors) {
        const field = key as keyof ContactFormInput;
        const messages = result.validationErrors[field];
        if (messages && messages.length > 0) {
          setError(field, { message: messages[0] });
        }
      }
    } else if ('error' in result) {
      toast.error(result.error);
    } else {
      toast.error('Something went wrong');
    }

    setLoading(false);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-20 space-y-12">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-muted-foreground text-base">
            For any inquiries, collaborations, or support, please fill out the form below or reach us through the contact info provided.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MailIcon className="w-5 h-5 text-primary" />
              <a href="mailto:sudaisazlan09@gmail.com" className="hover:underline text-sm">
                sudaisazlan09@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-primary" />
              <a href="tel:+923129136013" className="hover:underline text-sm">
                +92 312 9136013
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPinIcon className="w-5 h-5 text-primary" />
              <span className="text-sm">Mardan, KPK, Pakistan</span>
            </div>
          </div>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input placeholder="Your Name" {...register('name')} />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Input placeholder="Your Email" {...register('email')} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Textarea rows={4} placeholder="Your Message" {...register('message')} />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-xl overflow-hidden w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13280.000947407223!2d71.5371497!3d34.2009626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dbd3e8e7e3e073%3A0x71669e4eaf7a418e!2sMardan%2C%20Khyber%20Pakhtunkhwa!5e0!3m2!1sen!2s!4v1719051247339!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
