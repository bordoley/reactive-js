import * as Runnable from "../../Runnable.js";
import { Function1 } from "../../functions.js";
import { HigherOrderObservableBaseTypeClass } from "../../type-classes.js";
import { ContainerOf, RunnableLike } from "../../types.js";
declare const HigherOrderObservableBaseTypeClassTests: <C extends import("../../types.js").ObservableContainer>(m: HigherOrderObservableBaseTypeClass<C, import("../../types.js").RunnableContainer>, fromRunnable: <T>() => Function1<RunnableLike<T>, ContainerOf<C, T>>) => import("../../__internal__/testing.js").Describe;
export default HigherOrderObservableBaseTypeClassTests;
