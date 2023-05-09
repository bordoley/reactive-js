import { Containers, ObservableContainer } from "../../containers.js";
interface ObservableCombineLatest {
    combineLatest<C extends ObservableContainer.Type, TA, TB>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>): Containers.Of<C, readonly [TA, TB]>;
    combineLatest<C extends ObservableContainer.Type, TA, TB, TC>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>): Containers.Of<C, readonly [TA, TB, TC]>;
    combineLatest<C extends ObservableContainer.Type, TA, TB, TC, TD>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>): Containers.Of<C, readonly [TA, TB, TC, TD]>;
    combineLatest<C extends ObservableContainer.Type, TA, TB, TC, TD, TE>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>): Containers.Of<C, readonly [TA, TB, TC, TD, TE]>;
    combineLatest<C extends ObservableContainer.Type, TA, TB, TC, TD, TE, TF>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF]>;
    combineLatest<C extends ObservableContainer.Type, TA, TB, TC, TD, TE, TF, TG>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>, g: Containers.Of<C, TG>): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    combineLatest<C extends ObservableContainer.Type, TA, TB, TC, TD, TE, TF, TG, TH>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>, g: Containers.Of<C, TG>, h: Containers.Of<C, TH>): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    combineLatest<C extends ObservableContainer.Type, TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>, g: Containers.Of<C, TG>, h: Containers.Of<C, TH>, i: Containers.Of<C, TI>): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}
declare const Observable_combineLatest: ObservableCombineLatest["combineLatest"];
export default Observable_combineLatest;
