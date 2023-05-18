import Enumerator_concatAll from "../../Enumerator/__internal__/Enumerator.concatAll.js";
import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipeLazy } from "../../functions.js";
import { EnumeratorFactoryLike } from "../../types.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_concatMany = <T>(
  factories: readonly EnumeratorFactoryLike<T>[],
) =>
  pipeLazy(
    factories,
    ReadonlyArray_map(EnumeratorFactory_enumerate<T>()),
    ReadonlyArray_enumerate(),
    Enumerator_concatAll<T>(),
  );

export default EnumeratorFactory_concatMany;
