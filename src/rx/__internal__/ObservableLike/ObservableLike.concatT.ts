import { Concat } from "../../../containers";
import { ObservableLike } from "../../../rx";
import ObservableLike__concat from "./ObservableLike.concat";

const ObservableLike__concatT: Concat<ObservableLike> = {
  concat: ObservableLike__concat,
};

export default ObservableLike__concatT;
