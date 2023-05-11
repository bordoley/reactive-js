import type * as Enumerable from "../../Enumerable.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { Function1, compose } from "../../functions.js";
import { EnumerableLike } from "../../types.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";

const Enumerable_concatMap: Enumerable.Signature["concatMap"] = <TA, TB>(
  selector: Function1<TA, EnumerableLike<TB>>,
) =>
  compose(
    Observable_map(selector) as Function1<
      EnumerableLike<TA>,
      EnumerableLike<EnumerableLike<TB>>
    >,
    Enumerable_concatAll(),
  );

export default Enumerable_concatMap;
