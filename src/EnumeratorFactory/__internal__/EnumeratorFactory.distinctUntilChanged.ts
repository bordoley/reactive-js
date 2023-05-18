import Enumerator_distinctUntilChanged from "../../Enumerator/__internal__/Enumerator.distinctUntilChanged.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Equality, composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_distinctUntilChanged: EnumeratorFactory.Signature["distinctUntilChanged"] =
  <T>(options?: { equality?: Equality<T> }) =>
    composeLazy(
      EnumeratorFactory_enumerate<T>(),
      Enumerator_distinctUntilChanged(options),
    );

export default EnumeratorFactory_distinctUntilChanged;
