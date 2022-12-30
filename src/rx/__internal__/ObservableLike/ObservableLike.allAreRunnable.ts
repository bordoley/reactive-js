import ReadonlyArrayLike__every from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.every";
import ReadonlyArrayLike__map from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map";
import { compose, isTrue } from "../../../functions";
import ObservableLike__isRunnable from "./ObservableLike.isRunnable";

const allAreRunnable = compose(
  ReadonlyArrayLike__map(ObservableLike__isRunnable),
  ReadonlyArrayLike__every(isTrue),
);

export default allAreRunnable;
