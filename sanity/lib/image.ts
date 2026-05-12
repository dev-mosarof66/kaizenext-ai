import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export function getImageUrl(source: any, width: number = 800, height: number = 600): string {
  return urlFor(source).width(width).height(height).fit("crop").auto("format").url();
}
