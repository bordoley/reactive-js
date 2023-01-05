import { IterableLike } from "../../../containers";
import { compose } from "../../../functions";
import EnumerableLike__toEnumerableObservable from "../../../ix/__internal__/EnumerableLike/EnumerableLike.toEnumerableObservable";
import { ToEnumerableObservable } from "../../../rx";
import IterableLike__toEnumerable from "./IterableLike.toEnumerable";

const IterableLike__toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"] =
  _ =>
    compose(
      IterableLike__toEnumerable(),
      EnumerableLike__toEnumerableObservable(),
    );

export default IterableLike__toEnumerableObservable;
