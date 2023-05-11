import Observable_map from "../../Observable/__internal__/Observable.map.js";
import type * as Runnable from "../../Runnable.js";
import { Function1, compose } from "../../functions.js";
import { RunnableLike } from "../../types.js";
import Runnable_exhaust from "./Runnable.exhaust.js";

const Runnable_exhaustMap: Runnable.Signature["exhaustMap"] = <TA, TB>(
  selector: Function1<TA, RunnableLike<TB>>,
) =>
  compose(
    Observable_map(selector) as Function1<
      RunnableLike<TA>,
      RunnableLike<RunnableLike<TB>>
    >,
    Runnable_exhaust(),
  );

export default Runnable_exhaustMap;
