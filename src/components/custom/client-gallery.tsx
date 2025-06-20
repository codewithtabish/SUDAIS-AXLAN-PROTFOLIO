'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import BlurFade from '@/components/magicui/blur-fade';
import { Lens } from '@/components/magicui/lens';
import Image from 'next/image';
import { useState } from 'react';
import { GalleryItem } from '@/actions/galler';

interface Props {
  items: GalleryItem[];
}

export default function ClientGallery({ items }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!items.length) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        No gallery items found.
      </div>
    );
  }

  return (
    <section id="photos" className="px-4 py-10">
      <h2 className="mb-8 text-center text-3xl font-bold">Life in Frames</h2>

      <div className="columns-2 gap-4 sm:columns-3 md:columns-4">
        {items.map((item, idx) => (
          <BlurFade
            key={item.id}
            delay={0.15 + idx * 0.1}
            inView
            className="break-inside-avoid"
          >
            {/* <div className='flex flex-col gap-2'>
            <p>{item?.imageUrl}</p>
            <p>{item?.imageUrl}</p>

            </div> */}
            <Dialog>
              <DialogTrigger asChild>
                <div
                  className="cursor-pointer"
                  onClick={() => setSelectedImage(item.imageUrl)}
                >
                  <Image
                    src={item.imageUrl}
                    alt={`Gallery image ${idx + 1}`}
                    width={500}
                    height={400}
                    className="mb-4 w-full rounded-lg object-cover transition-transform hover:scale-105"
                  />
                </div>
              </DialogTrigger>

              <DialogContent className="bg-transparent border-none shadow-none p-0 flex justify-center items-center max-w-[90vw] max-h-[90vh] w-auto h-auto">
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
