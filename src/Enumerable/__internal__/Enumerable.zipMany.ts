import Enumerable_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Enumerator_zipMany from "../../Enumerator/__internal__/Enumerator.zipMany.js";
import Observable_allArePure from "../../Observable/__internal__/Observable.allArePure.js";
import Enumerable_enumerate from "../../Observable/__internal__/Observable.enumerate.js";
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
    Observable_allArePure(observables),
  );

export default Enumerable_zipMany;
