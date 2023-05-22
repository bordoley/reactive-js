import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerable_enumerate from "../../Enumerable/__internal__/Enumerable.enumerate.js";
import Enumerator_zipMany from "../../Enumerator/__internal__/Enumerator.zipMany.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipeLazy } from "../../functions.js";
import { EnumerableLike } from "../../types.js";

const Enumerable_zipMany = (observables: readonly EnumerableLike<unknown>[]) =>
  Enumerable_create(
    pipeLazy(
      observables,
      ReadonlyArray_map(Enumerable_enumerate()),
      Enumerator_zipMany,
    ),
  );

export default Enumerable_zipMany;
