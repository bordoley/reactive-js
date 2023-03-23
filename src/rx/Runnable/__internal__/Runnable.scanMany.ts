import { RunnableLike, ScanMany } from "../../../rx.js";
import HigherOrderObservable_scanMany from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanMany.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_scanMany: ScanMany<RunnableLike, RunnableLike>["scanMany"] =
  HigherOrderObservable_scanMany<RunnableLike, RunnableLike>(Runnable_create);

export default Runnable_scanMany;
