'use client';

import React from 'react';
import BlurFade from '../magicui/blur-fade';
import Link from 'next/link';
import { DATA } from '@/data/resume';

const ContactSection = () => {
  const BLUR_FADE_DELAY = 0.04;

  return (
    <section id="contact" className="w-full py-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="inline-block bg-foreground text-background px-4 py-1 rounded-full text-sm font-medium">
            Contact
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let’s Connect
          </h2>

          <p className="text-muted-foreground md:text-lg leading-relaxed">
            Whether it's collaboration or questions, I'm always open to a conversation.
            You can message me directly{" "}
            <Link
              href="https://twitter.com/sudaisazlan" // or your actual X profile
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              on X (Twitter)
            </Link>
            , or reach out via email or phone.
          </p>

          {/* Contact Info Footer Style */}
          <div className="w-full border-t pt-8 mt-16 text-muted-foreground text-sm md:text-base">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center md:text-left">
                <div>
                  📧 Email:{" "}
                  <a
                    href="mailto:sudaisazlan09@gmail.com"
                    className="text-foreground font-medium hover:underline underline-offset-4"
                  >
                    sudaisazlan09@gmail.com
                  </a>
                </div>
                <div>
                  📞 Phone:{" "}
                  <a
                    href="tel:+923129136013"
                    className="text-foreground font-medium hover:underline underline-offset-4"
                  >
                    +92 312 9136013
                  </a>
                </div>
              </div>

              <div className="text-center md:text-right">
                <Link
                  href="/privacy-policy"
                  className="text-foreground font-medium hover:underline underline-offset-4"
                >
                  🔒 Privacy Policy
                </Link>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Sudais Azlan. All rights reserved.
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default ContactSection;
