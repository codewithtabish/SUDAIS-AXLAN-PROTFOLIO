'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/actions/projects';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileTerminal, GithubIcon, ListVideo } from 'lucide-react';
import React from 'react';

const fallbackImage =
  'https://6xrjshve2p.ufs.sh/f/VP8R2A0v1gbW8fyHsRpOdNrBDzFV9JACuUshgtovTEjeKl6W';

interface Props {
  project: Project;
  index: number;
  variant?: 'grid' | 'list';
}

const ProjectCard: React.FC<Props> = ({ project, index, variant = 'grid' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <Card
        className={`rounded-2xl shadow-md hover:shadow-lg transition duration-300 dark:border-gray-700 dark:border ${
          variant === 'list' ? 'flex items-start gap-4 p-4' : 'h-full'
        }`}
      >
        {/* LIST VIEW IMAGE */}
        {variant === 'list' && (
          <img
            src={project?.imageUrl || fallbackImage}
            alt={project?.title}
            className="w-40 h-32 object-cover rounded-xl"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = fallbackImage;
            }}
          />
        )}

        <CardContent
          className={`p-4 space-y-2 flex flex-col justify-between ${
            variant === 'list' ? 'w-full p-0' : ''
          }`}
        >
          {/* GRID VIEW: Show video if exists, otherwise image */}
          {variant === 'grid' &&
            (project.videoUrl ? (
              <video
                src={project.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none mx-auto h-40 w-full object-cover object-top rounded-xl mb-2"
              />
            ) : (
              <img
                src={project.imageUrl || fallbackImage}
                alt={project.title}
                className="w-full h-40 object-cover rounded-xl mb-2"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = fallbackImage;
                }}
              />
            ))}

          {/* TITLE */}
          <div className="text-xl font-semibold line-clamp-2">
            {project.title}
          </div>

          {/* DESCRIPTION */}
          <div className="text-muted-foreground text-sm line-clamp-3">
            {project.description}
          </div>

          {/* MORE LINK */}
          <Link
            href={`/projects/${project.slug}`}
            className="text-orange-600 text-sm italic hover:underline"
          >
            More...
          </Link>

          {/* TECH STACK (Only in Grid) */}
          {variant === 'grid' && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.split(',').map((tech, idx) => (
                <Badge key={idx} variant="secondary">
                  {tech.trim()}
                </Badge>
              ))}
            </div>
          )}

          {/* ICON LINKS */}
          <div className="flex gap-4 pt-4 items-center">
            {project.githubUrl && !project.isFinalYearProject && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="w-5 h-5 text-gray-500 hover:text-black dark:hover:text-white" />
              </a>
            )}
            {project.githubUrl && project.isFinalYearProject && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="w-5 h-5 text-red-800 hover:text-black dark:hover:text-white" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListVideo className="w-5 h-5 text-gray-500 hover:text-black dark:hover:text-white" />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
