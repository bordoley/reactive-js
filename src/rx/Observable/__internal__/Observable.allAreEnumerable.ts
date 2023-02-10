import { ReadonlyArrayLike } from "../../../containers";
import ReadonlyArray_every from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.every";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map";
import { compose, isTrue } from "../../../functions";
import { EnumerableObservableLike, ObservableLike } from "../../../rx";
import Observable_isEnumerable from "./Observable.isEnumerable";

const Observable_allAreEnumerable = compose(
  ReadonlyArray_map(Observable_isEnumerable),
  ReadonlyArray_every(isTrue),
) as unknown as (
  srcs: ReadonlyArrayLike<ObservableLike>,
) => srcs is ReadonlyArrayLike<EnumerableObservableLike>;

export default Observable_allAreEnumerable;
