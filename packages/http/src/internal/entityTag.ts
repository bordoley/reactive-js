import { EntityTag } from "./interfaces";

/** @ignore */
export const entityTagToString = ({ isWeak, tag }: EntityTag): string => {
  return isWeak ? `\\W"${tag}"` : `"${tag}"`;
};
