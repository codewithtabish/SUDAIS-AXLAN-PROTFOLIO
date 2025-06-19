'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/actions/projects';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GitBranch, Github, GithubIcon, ListVideo, LucideView } from 'lucide-react';

const fallbackImage =
  'https://6xrjshve2p.ufs.sh/f/VP8R2A0v1gbW8fyHsRpOdNrBDzFV9JACuUshgtovTEjeKl6W';

interface Props {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* <Link href={`/projects/${project.slug}`}> */}
        <Card className="rounded-2xl shadow-md hover:shadow-lg transition dark:border-gray-700 dark:border-[1px] duration-300 cursor-pointer h-full">
          <CardContent className="p-4 space-y-2 flex flex-col h-full">
            <img
              src={project.imageUrl || fallbackImage}
              alt={project.title}
              className="w-full h-40 object-cover rounded-xl mb-2"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = fallbackImage;
              }}
            />
            <div className="min-h-[58px] text-center max-h-[58px] overflow-hidden line-clamp-2 text-xl font-semibold">
              {project.title}
            </div>
            <div className="text-muted-foreground text-sm line-clamp-3 min-h-[72px] max-h-[72px]">
              {project.description}
            </div>
            <Link href={`/project/${project?.slug}`} className='text-orange-700 italic text-sm'>
             more ...
            </Link>
            <div className="flex flex-wrap gap-2 pt-2 justify-center items-center">
              {project.techStack.split(',').map((keyword, index) => (
                <Badge key={index} variant="secondary">
                  {keyword.trim()}
                </Badge>
              ))}
            </div>
            <div className='flex flow-row gap-4 pt-4 justify-center items-center'>
              <p>
                {project?.githubUrl&& 
                <a href={project?.githubUrl} target='_blank'>
                  <span  >
                  <GithubIcon  className='w-6 h-6 text-gray-400  '/>
                  {/* github */}

                  </span>
                </a>
                }
              </p>
              <p>
                {project.liveUrl && 
                <a href={project.liveUrl} target='_blank'>
                  <ListVideo/>
                </a>
                }
              </p>
            </div>
          </CardContent>
        </Card>
      {/* </Link> */}
    </motion.div>
  );
};

export default ProjectCard;
