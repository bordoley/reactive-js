import { Container, ContainerModule, ContainerOperator } from "../../types.js";
declare const Container_pick: <C extends Container>(map: <TA, TB>(selector: import("../../functions.js").Function1<TA, TB>) => ContainerOperator<C, TA, TB>) => {
    <T, TKey extends keyof T>(key: TKey): ContainerOperator<C, T, T[TKey]>;
    <T_1, TKeyA extends keyof T_1, TKeyB extends keyof T_1[TKeyA]>(keyA: TKeyA, keyB: TKeyB): ContainerOperator<C, T_1, T_1[TKeyA][TKeyB]>;
    <T_2, TKeyA_1 extends keyof T_2, TKeyB_1 extends keyof T_2[TKeyA_1], TKeyC extends keyof T_2[TKeyA_1][TKeyB_1]>(keyA: TKeyA_1, keyB: TKeyB_1, keyC: TKeyC): ContainerOperator<C, T_2, T_2[TKeyA_1][TKeyB_1][TKeyC]>;
};
export default Container_pick;
