import { ConcatAll } from "../../../containers";
import { ObservableLike } from "../../../rx";
import ObservableLike__switchAll from "./ObservableLike.switchAll";

const ObservableLike__switchAllT: ConcatAll<ObservableLike> = {
  concatAll: ObservableLike__switchAll,
};

export default ObservableLike__switchAllT;
