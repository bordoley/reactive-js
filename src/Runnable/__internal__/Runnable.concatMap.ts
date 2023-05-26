import Observable_map from "../../Observable/__internal__/Observable.map.js";
import type * as Runnable from "../../Runnable.js";
import { Function1, compose } from "../../functions.js";
import { RunnableLike } from "../../types.js";
import Runnable_concatAll from "./Runnable.concatAll.js";

const Runnable_concatMap: Runnable.Signature["concatMap"] = <TA, TB>(
  selector: Function1<TA, RunnableLike<TB>>,
) =>
  compose(
    Observable_map(selector) as Function1<
      RunnableLike<TA>,
      RunnableLike<RunnableLike<TB>>
    >,
    Runnable_concatAll<TB>(),
  );

export default Runnable_concatMap;
