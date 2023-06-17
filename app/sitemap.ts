import { getPages } from '@worktopio/sitemap';
import '@worktopio/sitemap/lib/types';
import { MetadataRoute } from 'next';

import { absoluteUrl } from 'lib/utils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getPages({ page: 1, limit: 1000 });

  return data.pages.map((page) => ({
    url: `${absoluteUrl('')}${page.href}`,
    lastModified: new Date()
  }));
}
