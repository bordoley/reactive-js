import Enumerator_scan from "../../Enumerator/__internal__/Enumerator.scan.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Factory, Reducer, composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_scan: EnumeratorFactory.Signature["scan"] = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  composeLazy(
    EnumeratorFactory_enumerate<T>(),
    Enumerator_scan(reducer, initialValue),
  );

export default EnumeratorFactory_scan;
