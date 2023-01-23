import { FromArray } from "../../../containers";
import { ObservableLike } from "../../../rx";
import ObservableLike__fromArray from "./ObservableLike.fromArray";

const ObservableLike__fromArrayT: FromArray<
  ObservableLike,
  {
    readonly delay: number;
    readonly delayStart: boolean;
    readonly start: number;
    readonly count: number;
  }
> = {
  fromArray: ObservableLike__fromArray,
};

export default ObservableLike__fromArrayT;
