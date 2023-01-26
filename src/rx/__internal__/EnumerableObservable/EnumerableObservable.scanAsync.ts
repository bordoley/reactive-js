import { EnumerableObservableLike, ScanAsync } from "../../../rx";
import HigherOrderObservable$scanAsync from "../HigherOrderObservable/HigherOrderObservable.scanAsync";
import EnumerableObservable$create from "./EnumerableObservable.create";

const EnumerableObservable$scanAsync: ScanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
>["scanAsync"] = HigherOrderObservable$scanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
>(EnumerableObservable$create);

export default EnumerableObservable$scanAsync;
