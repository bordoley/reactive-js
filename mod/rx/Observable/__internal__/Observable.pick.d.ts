import { ContainerOperator } from "../../../containers.js";
import { ObservableContainerLike } from "../../../rx.js";
interface ObservablePick {
    pick<C extends ObservableContainerLike, T, TKey extends keyof T>(key: TKey): ContainerOperator<C, T, T[TKey]>;
    pick<C extends ObservableContainerLike, T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(keyA: TKeyA, keyB: TKeyB): ContainerOperator<C, T, T[TKeyA][TKeyB]>;
    pick<C extends ObservableContainerLike, T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA], TKeyC extends keyof T[TKeyA][TKeyB]>(keyA: TKeyA, keyB: TKeyB, keyC: TKeyC): ContainerOperator<C, T, T[TKeyA][TKeyB][TKeyC]>;
}
declare const Observable_pick: ObservablePick["pick"];
export default Observable_pick;
