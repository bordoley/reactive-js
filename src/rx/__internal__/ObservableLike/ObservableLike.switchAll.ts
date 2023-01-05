import { ConcatAll } from "../../../containers";
import { ObservableLike } from "../../../rx";
import HigherOrderObservableLike__switchAll from "../HigherOrderObservableLike/HigherOrderObservableLike.switchAll";
import ObservableLike__lift from "./ObservableLike.lift";

const ObservableLike__switchAll: ConcatAll<ObservableLike>["concatAll"] =
  /*@__PURE__*/ HigherOrderObservableLike__switchAll<ObservableLike>(
    ObservableLike__lift(),
  );

export default ObservableLike__switchAll;
