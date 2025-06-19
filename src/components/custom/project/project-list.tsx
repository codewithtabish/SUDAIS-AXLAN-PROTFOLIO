import { getAllProjects, Project } from '@/actions/projects';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import React from 'react';
import ProjectCard from './project-card';
import BlurFade from '@/components/magicui/blur-fade';

const fallbackImage = 'https://6xrjshve2p.ufs.sh/f/VP8R2A0v1gbW8fyHsRpOdNrBDzFV9JACuUshgtovTEjeKl6W';
const BLUR_FADE_DELAY = 0.04;

const ProjectList = async () => {
  let projects: Project[] = [];

  try {
    projects = await getAllProjects();
  } catch (error) {
    console.error('Error fetching projects:', error);
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-red-600">⚠️ Failed to load projects</h2>
        <p className="text-muted-foreground mt-2">
          Please check your internet connection or try again later.
        </p>
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-gray-700">No projects found</h2>
        <p className="text-muted-foreground mt-2">
          Projects will appear here once they are published.
        </p>
      </div>
    );
  }

  return (
    <>
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety of projects, from simple websites to complex AI applications.
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {projects.map((project: Project, index: number) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
