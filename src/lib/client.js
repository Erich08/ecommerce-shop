import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'nxj0400v',
  dataset: 'production',
  apiVersion: '2022-06-27',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

export const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
