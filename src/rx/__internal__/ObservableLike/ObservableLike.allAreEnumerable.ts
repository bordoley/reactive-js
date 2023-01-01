import ReadonlyArrayLike__every from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.every";
import ReadonlyArrayLike__map from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map";
import { compose, isTrue } from "../../../functions";
import ObservableLike__isEnumerable from "./ObservableLike.isEnumerable";

const ObservableLike__allAreEnumerable = compose(
  ReadonlyArrayLike__map(ObservableLike__isEnumerable),
  ReadonlyArrayLike__every(isTrue),
);

export default ObservableLike__allAreEnumerable;
