import type * as Enumerable from "../../Enumerable.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { Function1, compose, identity } from "../../functions.js";
import { EnumerableLike } from "../../types.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";

const Enumerable_concatMap: Enumerable.Signature["concatMap"] = <TA, TB>(
  selector: Function1<TA, EnumerableLike<TB>>,
) =>
  compose(
    identity<EnumerableLike<TA>>,
    Observable_map<TA, EnumerableLike<TB>>(selector),
    Enumerable_concatAll<TB>(),
  );

export default Enumerable_concatMap;
