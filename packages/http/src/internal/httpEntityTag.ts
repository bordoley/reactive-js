import { HttpEntityTagLike } from "./interfaces";

/** @ignore */
export const serializeHttpEntityTag = ({
  isWeak,
  tag,
}: HttpEntityTagLike): string => {
  return isWeak ? `\W"${tag}"` : `"${tag}"`;
};
