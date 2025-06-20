// components/resume/resume-wrapper.tsx

import { getLatestResume } from "@/actions/resume";
import ResumeDownloadClient from "./resume-client";

// import ResumeDownloadClient from './resume-client';

export default async function ResumeWrapper() {
  const resume = await getLatestResume();

  if (!resume) {
    return (
      <div className="text-center text-sm text-red-600">
        Resume not available at the moment.
      </div>
    );
  }


  return <ResumeDownloadClient resumeUrl={resume.resumeUrl} />;
}
