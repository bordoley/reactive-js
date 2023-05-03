import { Reactive, RunnableContainer } from "../../../rx.js";
import HigherOrderObservable_scanLast from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanLast.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_scanLast: Reactive.ScanLast<RunnableContainer>["scanLast"] =
  HigherOrderObservable_scanLast<RunnableContainer>(Runnable_create);

export default Runnable_scanLast;
