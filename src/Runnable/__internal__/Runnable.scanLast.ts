import HigherOrderObservable_scanLast from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanLast.js";
import { Containers, RunnableContainer } from "../../types.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_scanLast: Containers.TypeClass<RunnableContainer>["scanLast"] =
  HigherOrderObservable_scanLast<RunnableContainer>(Runnable_create);

export default Runnable_scanLast;
