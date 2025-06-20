import React from 'react'
import BackButton from '../back-comp'

const ProjectBanner = () => {
  return (
        <section
  className="relative w-full py-16 px-6 text-center rounded-xl shadow-sm  
             bg-gradient-to-br from-[#f0f4ff] to-[#dff1ff] 
             dark:from-[#0f172a] dark:to-[#1e293b] transition-colors"
>
    <BackButton/>
  <div className="max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold sm:text-5xl tracking-tight text-foreground">
      All Projects
    </h1>
    <p className="mt-4 text-muted-foreground text-base sm:text-lg">
      Explore a collection of projects I’ve built — from AI and machine learning models to full-stack web applications.
      Use the filters below to find the ones that interest you most.
    </p>
  </div>
</section>

      
  )
}

export default ProjectBanner
