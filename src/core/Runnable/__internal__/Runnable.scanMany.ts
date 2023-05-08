import { ReactiveContainer, RunnableContainer } from "../../../core.js";
import HigherOrderObservable_scanMany from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanMany.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_scanMany: ReactiveContainer.TypeClass<RunnableContainer>["scanMany"] =
  HigherOrderObservable_scanMany<RunnableContainer>(Runnable_create);

export default Runnable_scanMany;
