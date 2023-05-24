import EnumerableBase_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Enumerator_concatAll from "../../Enumerator/__internal__/Enumerator.concatAll.js";
import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import { invoke, pipe } from "../../functions.js";
import {
  EnumerableBaseLike,
  EnumerableLike_enumerate,
  EnumerableWithSideEffectsLike,
} from "../../types.js";

const EnumerableWithSideEffects_concatAll =
  <T>() =>
  (
    enumerable: EnumerableBaseLike<EnumerableBaseLike<T>>,
  ): EnumerableWithSideEffectsLike<T> =>
    EnumerableBase_create<T>(
      () =>
        pipe(
          enumerable[EnumerableLike_enumerate](),
          Enumerator_map(invoke(EnumerableLike_enumerate)),
          Enumerator_concatAll(),
        ),
      false,
    );

export default EnumerableWithSideEffects_concatAll;
