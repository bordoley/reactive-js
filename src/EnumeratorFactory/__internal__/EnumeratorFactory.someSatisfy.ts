import Enumerator_someSatisfy from "../../Enumerator/__internal__/Enumerator.someSatisfy.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Predicate, compose } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_someSatisfy: EnumeratorFactory.Signature["someSatisfy"] =
  <T>(predicate: Predicate<T>) =>
    compose(
      EnumeratorFactory_enumerate<T>(),
      Enumerator_someSatisfy(predicate),
    );

export default EnumeratorFactory_someSatisfy;
