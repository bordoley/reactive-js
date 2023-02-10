import { ContainerLike, Zip, ContainerOf, ContainerOperator } from "../../../containers.js";
interface ZipWith {
    <C extends ContainerLike, TA, TB>({ zip }: Zip<C>, b: ContainerOf<C, TB>): ContainerOperator<C, TA, readonly [
        TA,
        TB
    ]>;
    <C extends ContainerLike, TA, TB, TC>({ zip }: Zip<C>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>): ContainerOperator<C, TA, readonly [
        TA,
        TB,
        TC
    ]>;
    <C extends ContainerLike, TA, TB, TC, TD>({ zip }: Zip<C>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>): ContainerOperator<C, TA, readonly [
        TA,
        TB,
        TC,
        TD
    ]>;
    <C extends ContainerLike, TA, TB, TC, TD, TE>({ zip }: Zip<C>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>): ContainerOperator<C, TA, readonly [
        TA,
        TB,
        TC,
        TD,
        TE
    ]>;
    <C extends ContainerLike, TA, TB, TC, TD, TE, TF>({ zip }: Zip<C>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>): ContainerOperator<C, TA, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF
    ]>;
    <C extends ContainerLike, TA, TB, TC, TD, TE, TF, TG>({ zip }: Zip<C>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>): ContainerOperator<C, TA, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG
    ]>;
    <C extends ContainerLike, TA, TB, TC, TD, TE, TF, TG, TH>({ zip }: Zip<C>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>): ContainerOperator<C, TA, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG,
        TH
    ]>;
    <C extends ContainerLike, TA, TB, TC, TD, TE, TF, TG, TH, TI>({ zip }: Zip<C>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>, i: ContainerOf<C, TI>): ContainerOperator<C, TA, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG,
        TH,
        TI
    ]>;
}
declare const Container_zipWith: ZipWith;
export { ZipWith, Container_zipWith as default };
