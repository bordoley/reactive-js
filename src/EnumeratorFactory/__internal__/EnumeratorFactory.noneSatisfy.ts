import Enumerator_noneSatisfy from "../../Enumerator/__internal__/Enumerator.noneSatisfy.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Predicate, compose } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_noneSatisfy: EnumeratorFactory.Signature["noneSatisfy"] =
  <T>(predicate: Predicate<T>) =>
    compose(
      EnumeratorFactory_enumerate<T>(),
      Enumerator_noneSatisfy(predicate),
    );

export default EnumeratorFactory_noneSatisfy;
