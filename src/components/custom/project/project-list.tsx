import { getAllProjects, Project } from '@/actions/projects';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BlurFade from '@/components/magicui/blur-fade';
import ProjectCard from './project-card';
import Link from 'next/link';
import React from 'react';

const fallbackImage =
  'https://6xrjshve2p.ufs.sh/f/VP8R2A0v1gbW8fyHsRpOdNrBDzFV9JACuUshgtovTEjeKl6W';
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
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-6">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground max-w-xl text-base sm:text-lg mx-auto">
              From sleek websites to AI-driven applications, here’s a glimpse of what I’ve built.
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
        {projects.map((project: Project, index: number) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* <div className="mt-8 flex justify-center ">
        <Link href="/projects" passHref>
          <Button variant="link" className="text-primary text-lg hover:underline">
            View all projects →
          </Button>
        </Link>
      </div> */}
    </>
  );
};

export default ProjectList;
