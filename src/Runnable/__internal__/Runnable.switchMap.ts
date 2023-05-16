import Observable_map from "../../Observable/__internal__/Observable.map.js";
import type * as Runnable from "../../Runnable.js";
import { Function1, compose } from "../../functions.js";
import { RunnableLike } from "../../types.js";
import Runnable_switchAll from "./Runnable.switchAll.js";

const Runnable_switchMap: Runnable.Signature["switchMap"] = <TA, TB>(
  selector: Function1<TA, RunnableLike<TB>>,
) =>
  compose(
    Observable_map(selector) as Function1<
      RunnableLike<TA>,
      RunnableLike<RunnableLike<TB>>
    >,
    Runnable_switchAll(),
  );

export default Runnable_switchMap;
