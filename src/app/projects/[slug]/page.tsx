import { getProjectBySlug } from '@/actions/projects';
import BackButton from '@/components/custom/back-comp';
import ProjectRichRenderWrapper from '@/components/custom/project/project-rich-wrapper';
import ShareButtons from '@/components/custom/project/share-button';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function SingleProject({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  if (!project) return notFound();
    const bannerUrl =project?.imageUrl
     ||
    "https://5bl4nawh55.ufs.sh/f/aETJ5rHKEzpCgFmmwV1kwb2pQ51rzEMsL8PjH9XNi6ngqKoa";

  return (
     <div className="md:max-w-3xl mx-auto px-4 py-10">
        <BackButton/>
      {/* <BackButton /> */}

      {bannerUrl && (
        <Image
          src={bannerUrl}
          alt={project.title}
          width={700}
          height={400}
          className="w-full md:max-h-[400px] rounded-lg object-cover mb-6"
        />
      )}

      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 text-lg mb-4">{project.description}</p>

      <div className="prose prose-lg max-w-none dark:prose-invert mt-8">
        <ProjectRichRenderWrapper blocks={project?.content} />
        {/* <div className="border border-t-2 my-4 py-4 px-5"> */}
          <ShareButtons title={project.title} url={params?.slug} />
        {/* </div> */}
      </div>
    </div>
  );
}
