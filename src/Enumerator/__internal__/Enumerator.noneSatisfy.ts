import type * as Enumerator from "../../Enumerator.js";
import { Predicate, compose, negate } from "../../functions.js";
import Enumerator_everySatisfy from "./Enumerator.everySatisfy.js";

const Enumerator_noneSatisfy: Enumerator.Signature["noneSatisfy"] = <T>(
  predicate: Predicate<T>,
) => Enumerator_everySatisfy(compose(predicate, negate));

export default Enumerator_noneSatisfy;
