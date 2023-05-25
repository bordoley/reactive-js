import Observable_map from "../../Observable/__internal__/Observable.map.js";
import type * as Runnable from "../../Runnable.js";
import { Function1, pipe } from "../../functions.js";
import { RunnableLike } from "../../types.js";
import Runnable_switchAll from "./Runnable.switchAll.js";

const Runnable_switchMap: Runnable.Signature["switchMap"] =
  <TA, TB>(selector: Function1<TA, RunnableLike<TB>>) =>
  (obs: RunnableLike<TA>) =>
    pipe(obs, Observable_map(selector), Runnable_switchAll<TB>());

export default Runnable_switchMap;
