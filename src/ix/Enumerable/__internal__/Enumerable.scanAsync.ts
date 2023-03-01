import { EnumerableLike } from "../../../ix.js";
import { ScanAsync } from "../../../rx.js";
import HigherOrderObservable_scanAsync from "../../../rx/HigherOrderObservable/__internal__/HigherOrderObservable.scanAsync.js";
import Enumerable_create from "./Enumerable.create.js";

const EnumerableObservable_scanAsync: ScanAsync<
  EnumerableLike,
  EnumerableLike
>["scanAsync"] = HigherOrderObservable_scanAsync<
  EnumerableLike,
  EnumerableLike
>(Enumerable_create);

export default EnumerableObservable_scanAsync;
