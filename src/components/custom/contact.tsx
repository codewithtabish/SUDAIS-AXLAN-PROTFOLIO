'use client'

import React from 'react'
import BlurFade from '../magicui/blur-fade'
import Link from 'next/link'
import { DATA } from '@/data/resume'

const ContactSection = () => {
  const BLUR_FADE_DELAY = 0.04;

  const { email, tel, social } = DATA.contact;

  return (
    <section id="contact " className='pb-16'>
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me a DM{" "}
              <Link
                href={social.X.url}
                className="text-blue-500 hover:underline"
              >
                on Twitter (X)
              </Link>{" "}
              and I’ll respond whenever I can.
              <br className="hidden sm:block" />
              For professional inquiries, feel free to email or call me directly.
            </p>

            <div className="mt-6 space-y-2 text-muted-foreground text-base font-medium">
              <div>
                📧 Email:{" "}
                <Link
                  href={`mailto:${email}`}
                  className="text-blue-600 hover:underline"
                >
                  {email}
                </Link>
              </div>
              <div>
                📞 Phone:{" "}
                <Link
                  href={`tel:${tel}`}
                  className="text-blue-600 hover:underline"
                >
                  {tel}
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default ContactSection;
