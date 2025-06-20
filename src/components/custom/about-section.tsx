import React from 'react'
import BlurFade from '../magicui/blur-fade'
import Markdown from 'react-markdown'
import { DATA } from '@/data/resume'

const AboutSection = () => {
    const BLUR_FADE_DELAY = 0.04;

  return (
     <section id="about" className=''>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
         <Markdown className="prose max-w-full text-muted-foreground dark:prose-invert leading-7">
  {DATA.summary}
</Markdown>

        </BlurFade>
      </section>
  )
}

export default AboutSection
