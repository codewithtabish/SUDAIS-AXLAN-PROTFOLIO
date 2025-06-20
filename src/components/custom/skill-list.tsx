import React from 'react'
import BlurFade from '../magicui/blur-fade'
import { DATA } from '@/data/resume'
import { Badge } from '../ui/badge'

const SkillList = () => {
    const BLUR_FADE_DELAY = 0.04;

  return (
   
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-13">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-2xl font-bold">Skill</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-4">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill}
              className=''
               delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill} className=' ' variant='outline'>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
  )
}

export default SkillList