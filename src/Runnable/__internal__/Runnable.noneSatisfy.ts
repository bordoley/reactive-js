import type * as Runnable from "../../Runnable.js";
import { Predicate, compose, negate } from "../../functions.js";
import Runnable_everySatisfy from "./Runnable.everySatisfy.js";

const Runnable_noneSatisfy: Runnable.Signature["noneSatisfy"] = <T>(
  predicate: Predicate<T>,
) => Runnable_everySatisfy(compose(predicate, negate));

export default Runnable_noneSatisfy;
