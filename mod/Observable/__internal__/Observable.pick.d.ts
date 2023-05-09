import { Containers, ObservableContainer } from "../../types.js";
interface ObservablePick {
    pick<C extends ObservableContainer, T, TKey extends keyof T>(key: TKey): Containers.Operator<C, T, T[TKey]>;
    pick<C extends ObservableContainer, T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(keyA: TKeyA, keyB: TKeyB): Containers.Operator<C, T, T[TKeyA][TKeyB]>;
    pick<C extends ObservableContainer, T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA], TKeyC extends keyof T[TKeyA][TKeyB]>(keyA: TKeyA, keyB: TKeyB, keyC: TKeyC): Containers.Operator<C, T, T[TKeyA][TKeyB][TKeyC]>;
}
declare const Observable_pick: ObservablePick["pick"];
export default Observable_pick;
