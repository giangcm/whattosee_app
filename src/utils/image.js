
import imageUrlBuilder from "@sanity/image-url";
import { Sanity } from "../../sanity";

const imageBuilder = imageUrlBuilder(Sanity);

export const imageUrlFor = source => imageBuilder.image(source);
