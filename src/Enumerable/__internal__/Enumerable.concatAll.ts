import Enumerator_concatAll from "../../Enumerator/__internal__/Enumerator.concatAll.js";
import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import { invoke, pipe } from "../../functions.js";
import { EnumerableLike, EnumerableLike_enumerate } from "../../types.js";
import Enumerable_create from "./Enumerable.create.js";

const Enumerable_concatAll =
  <T>() =>
  (enumerable: EnumerableLike<EnumerableLike<T>>): EnumerableLike<T> =>
    Enumerable_create<T>(() =>
      pipe(
        enumerable[EnumerableLike_enumerate](),
        Enumerator_map(invoke(EnumerableLike_enumerate)),
        Enumerator_concatAll(),
      ),
    );

export default Enumerable_concatAll;
