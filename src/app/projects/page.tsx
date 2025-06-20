import ProjectBanner from '@/components/custom/project/project-banner'
import ProjectPageList from '@/components/custom/project/project-page-list'
import React from 'react'

const ProjectsPage = () => {
  return (
    <div>
      <ProjectBanner/>
      <div className='md:max-w-4xl mx-auto py-10'>
      <ProjectPageList view='grid'/>

      </div>
    </div>
  )
}

export default ProjectsPage
