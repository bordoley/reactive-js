import { Concat } from "../../../containers";
import { ObservableLike } from "../../../rx";
import ObservableLike__merge from "./ObservableLike.merge";

const ObservableLike__mergeT: Concat<ObservableLike> = {
  concat: ObservableLike__merge,
};
export default ObservableLike__mergeT;
