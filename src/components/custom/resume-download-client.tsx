// components/resume/resume-download-client.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

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
        <Button variant="default" size="lg" className="gap-2">
          <Download className="w-4 h-4" />
          Download Resume (PDF)
        </Button>
      </a>
    </div>
  );
};

export default ResumeDownloadClient;
