'use client'

import React from 'react'
import BlurFade from '../magicui/blur-fade'
import { DATA } from '@/data/resume'
import { ResumeCard } from '../resume-card'

const BLUR_FADE_DELAY = 0.04

const WorkSection = () => {
  return (
    <section id="work" className="w-full overflow-hidden py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Work Experience
            </h2>
          </BlurFade>

          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? 'Present'}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
