import Enumerator_everySatisfy from "../../Enumerator/__internal__/Enumerator.everySatisfy.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Predicate, compose } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_everySatisfy: EnumeratorFactory.Signature["everySatisfy"] =
  <T>(predicate: Predicate<T>) =>
    compose(
      EnumeratorFactory_enumerate<T>(),
      Enumerator_everySatisfy(predicate),
    );

export default EnumeratorFactory_everySatisfy;
