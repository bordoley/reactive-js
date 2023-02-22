import { RunnableObservableLike, ScanAsync } from "../../../rx.js";
import HigherOrderObservable_scanAsync from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanAsync.js";
import RunnableObservable_create from "./RunnableObservable.create.js";

const RunnableObservable_scanAsync: ScanAsync<
  RunnableObservableLike,
  RunnableObservableLike
>["scanAsync"] = HigherOrderObservable_scanAsync<
  RunnableObservableLike,
  RunnableObservableLike
>(RunnableObservable_create);

export default RunnableObservable_scanAsync;
