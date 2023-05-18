import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Predicate, compose, negate } from "../../functions.js";
import EnumeratorFactory_everySatisfy from "./EnumeratorFactory.everySatisfy.js";

const EnumeratorFactory_noneSatisfy: EnumeratorFactory.Signature["noneSatisfy"] =
  <T>(predicate: Predicate<T>) =>
    EnumeratorFactory_everySatisfy(compose(predicate, negate));

export default EnumeratorFactory_noneSatisfy;
