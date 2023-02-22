import { ObservableLike, ScanAsync } from "../../../rx.js";
import HigherOrderObservable_scanAsync from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanAsync.js";
import Observable_create from "./Observable.create.js";

const Observable_scanAsync: ScanAsync<
  ObservableLike,
  ObservableLike
>["scanAsync"] = HigherOrderObservable_scanAsync<
  ObservableLike,
  ObservableLike
>(Observable_create);

export default Observable_scanAsync;
