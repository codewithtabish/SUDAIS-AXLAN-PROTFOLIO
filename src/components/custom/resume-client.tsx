// components/resume/resume-download-client.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Badge } from '../ui/badge';

interface Props {
  resumeUrl: string;
}

const ResumeDownloadClient: React.FC<Props> = ({ resumeUrl }) => {
  return (
    <div className="text-center mt-6">
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <Badge variant='outline'>
          <Download className="w-4 h-4" />
          {/* Download Resume (PDF) */}
        </Badge>
      </a>
    </div>
  );
};

export default ResumeDownloadClient;
