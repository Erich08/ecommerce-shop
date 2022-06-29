import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'nxj0400v',
  dataset: 'production',
  apiVersion: '2022-06-29',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder: any = imageUrlBuilder(client);
console.log(builder);

export const urlFor = (source: any) => builder.image(source);
