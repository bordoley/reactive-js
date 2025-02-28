import { RunnableLike } from "../../../computations.js";
import { Function1, pipe } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_concatAll from "./Runnable.concatAll.js";
import Runnable_map from "./Runnable.map.js";

const Runnable_concatMap: Runnable.Signature["concatMap"] =
  <TA, TB>(selector: Function1<TA, RunnableLike<TB>>) =>
  (obs: RunnableLike<TA>) =>
    pipe(obs, Runnable_map(selector), Runnable_concatAll<TB>());

export default Runnable_concatMap;
