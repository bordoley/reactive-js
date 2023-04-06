import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
interface ObservablePick {
    pick<C extends ObservableLike, T>(key: keyof T): ContainerOperator<C, T, T[typeof key]>;
    pick<C extends ObservableLike, T>(keyA: keyof T, keyB: keyof T[typeof keyA]): ContainerOperator<C, T, T[typeof keyA][typeof keyB]>;
    pick<C extends ObservableLike, T>(keyA: keyof T, keyB: keyof T[typeof keyA]): ContainerOperator<C, T, T[typeof keyA][typeof keyB]>;
    pick<C extends ObservableLike, T>(keyA: keyof T, keyB: keyof T[typeof keyA], keyC: keyof T[typeof keyA][typeof keyB]): ContainerOperator<C, T, T[typeof keyA][typeof keyB][typeof keyC]>;
}
declare const Observable_pick: ObservablePick["pick"];
export default Observable_pick;
