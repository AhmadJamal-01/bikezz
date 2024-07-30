import { createClient } from "next-sanity";
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId:'ym2flin3',
    dataset: 'production',
    apiVersion: '2024-07-15',
    useCdn: true,
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
    return imgBuilder.image(source);
}