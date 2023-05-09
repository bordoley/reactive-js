import HigherOrderObservable_scanLast from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanLast.js";
import { RunnableContainer } from "../../containers.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_scanLast: RunnableContainer.TypeClass["scanLast"] =
  HigherOrderObservable_scanLast<RunnableContainer.Type>(Runnable_create);

export default Runnable_scanLast;
