import { RunnableLike, ScanLast } from "../../../rx.js";
import HigherOrderObservable_scanLast from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanLast.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_scanLast: ScanLast<RunnableLike>["scanLast"] =
  HigherOrderObservable_scanLast<RunnableLike>(Runnable_create);

export default Runnable_scanLast;
