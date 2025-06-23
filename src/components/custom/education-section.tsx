'use client'

import React from 'react'
import BlurFade from '../magicui/blur-fade'
import { DATA } from '@/data/resume'
import { ResumeCard } from '../resume-card'

const BLUR_FADE_DELAY = 0.04

const EducationSection = () => {
  return (
    <section id="education" className="w-full overflow-hidden py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Education
            </h2>
          </BlurFade>

          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
