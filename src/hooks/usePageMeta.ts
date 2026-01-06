import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description?: string;
}

export const usePageMeta = ({ title, description }: PageMeta) => {
  useEffect(() => {
    // Set document title
    document.title = `${title} | Haske Global Travel`;

    // Set meta description if provided
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // Cleanup - restore default on unmount
    return () => {
      document.title = 'Haske Global Travel - Luxury Corporate Travel Management';
    };
  }, [title, description]);
};

export default usePageMeta;
