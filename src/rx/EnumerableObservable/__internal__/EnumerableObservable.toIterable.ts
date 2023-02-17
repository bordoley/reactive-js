import { ToIterable } from "../../../containers";
import { compose, returns } from "../../../functions";
import Enumerable_toIterable from "../../../ix/Enumerable/__internal__/Enumerable.toIterable";
import { EnumerableObservableLike } from "../../../rx";
import EnumerableObservable_toEnumerable from "./EnumerableObservable.toEnumerable";

const EnumerableObservable_toIterable: ToIterable<EnumerableObservableLike>["toIterable"] =
  /*@__PURE__*/ returns(
    compose(EnumerableObservable_toEnumerable(), Enumerable_toIterable()),
  );

export default EnumerableObservable_toIterable;
