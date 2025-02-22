import { DeferableLike } from "../../../computations.js";
import { Function1, pipe } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";
import Deferable_concatAll from "./Deferable.concatAll.js";
import Deferable_map from "./Deferable.map.js";

const Deferable_concatMap: Deferable.Signature["concatMap"] =
  <TA, TB>(selector: Function1<TA, DeferableLike<TB>>) =>
  (obs: DeferableLike<TA>) =>
    pipe(obs, Deferable_map(selector), Deferable_concatAll<TB>());

export default Deferable_concatMap;
