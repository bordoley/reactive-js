import HigherOrderObservable_scanMany from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanMany.js";
import { RunnableContainer } from "../../containers.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_scanMany: RunnableContainer.TypeClass["scanMany"] =
  HigherOrderObservable_scanMany<RunnableContainer.Type>(Runnable_create);

export default Runnable_scanMany;
