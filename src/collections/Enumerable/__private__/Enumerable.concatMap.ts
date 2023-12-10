import { EnumerableLike } from "../../../collections.js";
import { Function1, compose, identity } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";
import Enumerable_map from "./Enumerable.map.js";

const Enumerable_concatMap: Enumerable.Signature["concatMap"] = <TA, TB>(
  selector: Function1<TA, EnumerableLike<TB>>,
) =>
  compose(
    identity<EnumerableLike<TA>>,
    Enumerable_map<TA, EnumerableLike<TB>>(selector),
    Enumerable_concatAll<TB>(),
  );

export default Enumerable_concatMap;
