import * as Observable from "../../Observable.js";
import * as Runnable from "../../Runnable.js";
import { Function1 } from "../../functions.js";
import { ContainerOf, HigherOrderObservableTypeClass, RunnableLike } from "../../types.js";
declare const HigherOrderObservableTypeClassTests: <C extends Observable.ObservableContainer>(m: HigherOrderObservableTypeClass<C, Runnable.RunnableContainer>, fromRunnable: <T>() => Function1<RunnableLike<T>, ContainerOf<C, T>>) => import("../../__internal__/testing.js").Describe;
export default HigherOrderObservableTypeClassTests;
