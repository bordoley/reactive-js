import Enumerator_reduce from "../../Enumerator/__internal__/Enumerator.reduce.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Factory, Reducer, compose } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_reduce: EnumeratorFactory.Signature["reduce"] = <
  T,
  TAcc,
>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  compose(
    EnumeratorFactory_enumerate<T>(),
    Enumerator_reduce(reducer, initialValue),
  );

export default EnumeratorFactory_reduce;
