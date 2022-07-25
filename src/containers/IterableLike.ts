import { IterableLike, ToIterable } from "../containers";
import { identity } from "../functions";

export const toIterable: ToIterable<IterableLike>["toIterable"] = () =>
  identity;
export const toIterableT: ToIterable<IterableLike> = {
  toIterable,
};
