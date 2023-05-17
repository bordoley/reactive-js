import * as Observable from "../../Observable.js";
import * as Runnable from "../../Runnable.js";
import { Function1 } from "../../functions.js";
import { HigherOrderObservableBaseTypeClass } from "../../type-classes.js";
import { ContainerOf, RunnableLike } from "../../types.js";
declare const HigherOrderObservableBaseTypeClassTests: <C extends Observable.ObservableContainer>(m: HigherOrderObservableBaseTypeClass<C, Runnable.RunnableContainer>, fromRunnable: <T>() => Function1<RunnableLike<T>, ContainerOf<C, T>>) => import("../../__internal__/testing.js").Describe;
export default HigherOrderObservableBaseTypeClassTests;
