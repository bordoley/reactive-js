import HigherOrderObservable_scanMany from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanMany.js";
import { ObservableContainers, RunnableContainer } from "../../containers.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_scanMany: ObservableContainers.TypeClass<RunnableContainer>["scanMany"] =
  HigherOrderObservable_scanMany<RunnableContainer>(Runnable_create);

export default Runnable_scanMany;
