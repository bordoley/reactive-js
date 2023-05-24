import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { Function1, compose } from "../../functions.js";
import {
  EnumerableBaseLike,
  EnumerableWithSideEffectsLike,
} from "../../types.js";
import EnumerableWithSideEffects_concatAll from "./EnumerableWithSideEffects.concatAll.js";

const EnumerableWithSideEffects_concatMap = <TA, TB>(
  selector: Function1<TA, EnumerableBaseLike<TB>>,
): Function1<EnumerableBaseLike<TA>, EnumerableWithSideEffectsLike<TB>> =>
  compose(Observable_map(selector), EnumerableWithSideEffects_concatAll());

export default EnumerableWithSideEffects_concatMap;
