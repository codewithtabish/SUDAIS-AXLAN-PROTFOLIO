'use client';

import { useState } from 'react';
import { Project } from '@/actions/projects';
import ProjectCard from './project-card';
import { List, LayoutGrid, FolderSearch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export interface ProjectViewToggleProps {
  projects: Project[];
  categories: string[];
  initialView?: 'grid' | 'list';
}

const ProjectViewToggle = ({
  projects,
  categories,
  initialView = 'grid',
}: ProjectViewToggleProps) => {
  const [view, setView] = useState<'grid' | 'list'>(initialView);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category?.categoryName === selectedCategory);

  return (
    <div className="w-full">
      {/* Toggle & Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex gap-2">
          <Button
            size="icon"
            variant={view === 'grid' ? 'default' : 'outline'}
            onClick={() => setView('grid')}
          >
            <LayoutGrid className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            variant={view === 'list' ? 'default' : 'outline'}
            onClick={() => setView('list')}
          >
            <List className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* No projects found */}
      {filteredProjects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center text-muted-foreground">
          <FolderSearch className="w-12 h-12 mb-4 text-gray-400" />
          <p className="text-lg font-medium">No projects found in this category.</p>
          <p className="text-sm text-gray-500">Try selecting another category above.</p>
        </div>
      ) : (
        <div
          className={
            view === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 gap-4'
              : 'flex flex-col gap-4'
          }
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variant={view}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectViewToggle;
