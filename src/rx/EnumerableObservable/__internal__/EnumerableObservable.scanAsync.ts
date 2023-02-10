import { EnumerableObservableLike, ScanAsync } from "../../../rx";
import HigherOrderObservable_scanAsync from "../../__internal__/HigherOrderObservable/HigherOrderObservable.scanAsync";
import EnumerableObservable_create from "./EnumerableObservable.create";

const EnumerableObservable_scanAsync: ScanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
>["scanAsync"] = HigherOrderObservable_scanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
>(EnumerableObservable_create);

export default EnumerableObservable_scanAsync;
