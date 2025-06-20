// app/components/custom/gallery/gallery-wrapper.tsx

import { GalleryItem, getAllGalleryItems } from "@/actions/galler";
import ClientGallery from "./client-gallery";


export default async function GalleryWrapper() {
  let galleryItems: GalleryItem[] = [];

  try {
    galleryItems = await getAllGalleryItems();
  } catch (error) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-red-600">⚠️ Failed to load gallery</h2>
        <p className="text-muted-foreground mt-2">
          Please check your server or internet connection and try again.
        </p>
      </div>
    );
  }

  return <ClientGallery items={galleryItems} />;
}
