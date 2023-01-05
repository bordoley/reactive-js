import { ConcatAll } from "../../../containers";
import { ObservableLike } from "../../../rx";
import ObservableLike__concatAll from "./ObservableLike.concatAll";

const ObservableLike__concatAllT: ConcatAll<
  ObservableLike,
  { readonly maxBufferSize: number }
> = {
  concatAll: ObservableLike__concatAll,
};

export default ObservableLike__concatAllT;
