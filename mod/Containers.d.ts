import { TypePredicate } from "./functions.js";
import { Container, ContainerModule, ContainerOperator, KeyOf } from "./types.js";
export interface ContainersModule {
    keepType<C extends Container, TA, TB extends TA, TKey extends KeyOf<C> = KeyOf<C>>(m: Pick<ContainerModule<C>, "keep">, predicate: TypePredicate<TA, TB>): ContainerOperator<C, TA, TB, TKey>;
    mapTo<C extends Container, T, TKey extends KeyOf<C> = KeyOf<C>>(m: Pick<ContainerModule<C>, "map">, value: T): ContainerOperator<C, unknown, T, TKey>;
    pick<C extends Container, T, TKeyOfT extends keyof T, TKey extends KeyOf<C> = KeyOf<C>>(m: Pick<ContainerModule<C>, "map">, key: TKeyOfT): ContainerOperator<C, T, T[TKeyOfT], TKey>;
    pick<C extends Container, T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA], TKey extends KeyOf<C> = KeyOf<C>>(m: Pick<ContainerModule<C>, "map">, keyA: TKeyOfTA, keyB: TKeyOfTB): ContainerOperator<C, T, T[TKeyOfTA][TKeyOfTB], TKey>;
    pick<C extends Container, T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA], TKeyOfTC extends keyof T[TKeyOfTA][TKeyOfTB], TKey extends KeyOf<C> = KeyOf<C>>(m: Pick<ContainerModule<C>, "map">, keyA: TKeyOfTA, keyB: TKeyOfTB, keyC: TKeyOfTC): ContainerOperator<C, T, T[TKeyOfTA][TKeyOfTB][TKeyOfTC], TKey>;
}
export type Signature = ContainersModule;
export declare const keepType: Signature["keepType"];
export declare const mapTo: Signature["mapTo"];
export declare const pick: Signature["pick"];
