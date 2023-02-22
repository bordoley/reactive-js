import { EnumerableObservableLike, ScanAsync } from "../../../rx.js";
import HigherOrderObservable_scanAsync from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanAsync.js";
import EnumerableObservable_create from "./EnumerableObservable.create.js";

const EnumerableObservable_scanAsync: ScanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
>["scanAsync"] = HigherOrderObservable_scanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
>(EnumerableObservable_create);

export default EnumerableObservable_scanAsync;
