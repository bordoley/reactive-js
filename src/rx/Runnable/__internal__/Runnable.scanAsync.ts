import { RunnableLike, ScanAsync } from "../../../rx.js";
import HigherOrderObservable_scanAsync from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanAsync.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_scanAsync: ScanAsync<RunnableLike, RunnableLike>["scanAsync"] =
  HigherOrderObservable_scanAsync<RunnableLike, RunnableLike>(Runnable_create);

export default Runnable_scanAsync;
