'use client';

import React, { useState } from 'react';
import { DATA } from '@/data/resume';
import { Lens } from '../magicui/lens';
import BlurFade from '../magicui/blur-fade';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';

const generateImageUrls = () =>
  Array.from({ length: 12 }, (_, i) => {
    const isLandscape = i % 2 === 0;
    const width = isLandscape ? 800 : 600;
    const height = isLandscape ? 600 : 800;
    return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
  });

const images = DATA.gallery?.length
  ? DATA.gallery.map((item) => item.avatarUrl)
  : generateImageUrls();

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="photos" className="px-4 py-10">
      <h2 className="mb-8 text-center text-3xl font-bold">Life in Frames</h2>

      <div className="columns-2 gap-4 sm:columns-3 md:columns-4">
        {images.map((url, idx) => (
          <BlurFade
            key={url}
            delay={0.15 + idx * 0.1}
            inView
            className="break-inside-avoid"
          >
            <Dialog>
              <DialogTrigger asChild>
                <div
                  className="cursor-pointer"
                  onClick={() => setSelectedImage(url)}
                >
                  {/* <Lens> */}
                    <Image
                      src={url?url:"/gallery/image-one.png"}
                      alt={`Gallery image ${idx + 1}`}
                      width={500}
                      height={400}
                      className="mb-4 w-full rounded-lg object-cover transition-transform hover:scale-105"
                    />
                  {/* </Lens> */}
                </div>
              </DialogTrigger>

              <DialogContent
                className="bg-transparent border-none shadow-none p-0 flex justify-center items-center max-w-[90vw] max-h-[90vh] w-auto h-auto"
              >
                {selectedImage && (
                  <Lens>
                    <Image
                      src={selectedImage}
                      alt="Full View"
                      width={1000}
                      height={800}
                      className="rounded-xl max-h-[80vh] w-auto h-auto object-contain"
                    />
                  </Lens>
                )}
              </DialogContent>
            </Dialog>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
