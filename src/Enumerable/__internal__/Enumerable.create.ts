import EnumerableBase_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import { Factory } from "../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  ObservableLike_isPure,
} from "../../types.js";

const Enumerable_create = <T>(
  enumerate: Factory<EnumeratorLike<T>>,
): EnumerableLike<T> =>
  EnumerableBase_create(enumerate, { [ObservableLike_isPure]: true });

export default Enumerable_create;
