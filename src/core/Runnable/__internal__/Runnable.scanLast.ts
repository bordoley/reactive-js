import { ReactiveContainer, RunnableContainer } from "../../../core.js";
import HigherOrderObservable_scanLast from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanLast.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_scanLast: ReactiveContainer.TypeClass<RunnableContainer>["scanLast"] =
  HigherOrderObservable_scanLast<RunnableContainer>(Runnable_create);

export default Runnable_scanLast;
