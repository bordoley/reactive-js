import { Container, ObservableContainer } from "../../containers.js";
interface ObservablePick {
    pick<C extends ObservableContainer.Type, T, TKey extends keyof T>(key: TKey): Container.Operator<C, T, T[TKey]>;
    pick<C extends ObservableContainer.Type, T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(keyA: TKeyA, keyB: TKeyB): Container.Operator<C, T, T[TKeyA][TKeyB]>;
    pick<C extends ObservableContainer.Type, T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA], TKeyC extends keyof T[TKeyA][TKeyB]>(keyA: TKeyA, keyB: TKeyB, keyC: TKeyC): Container.Operator<C, T, T[TKeyA][TKeyB][TKeyC]>;
}
declare const Observable_pick: ObservablePick["pick"];
export default Observable_pick;
