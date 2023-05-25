import Observable_map from "../../Observable/__internal__/Observable.map.js";
import type * as Runnable from "../../Runnable.js";
import { Function1, pipe } from "../../functions.js";
import { RunnableLike } from "../../types.js";
import Runnable_exhaust from "./Runnable.exhaust.js";

const Runnable_exhaustMap: Runnable.Signature["exhaustMap"] =
  <TA, TB>(selector: Function1<TA, RunnableLike<TB>>) =>
  (obs: RunnableLike<TA>) =>
    pipe(obs, Observable_map(selector), Runnable_exhaust<TB>());

export default Runnable_exhaustMap;
