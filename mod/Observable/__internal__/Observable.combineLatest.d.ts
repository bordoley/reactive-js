import { Container, ObservableContainer } from "../../containers.js";
interface ObservableCombineLatest {
    combineLatest<C extends ObservableContainer.Type, TA, TB>(a: Container.Of<C, TA>, b: Container.Of<C, TB>): Container.Of<C, readonly [TA, TB]>;
    combineLatest<C extends ObservableContainer.Type, TA, TB, TC>(a: Container.Of<C, TA>, b: Container.Of<C, TB>, c: Container.Of<C, TC>): Container.Of<C, readonly [TA, TB, TC]>;
    combineLatest<C extends ObservableContainer.Type, TA, TB, TC, TD>(a: Container.Of<C, TA>, b: Container.Of<C, TB>, c: Container.Of<C, TC>, d: Container.Of<C, TD>): Container.Of<C, readonly [TA, TB, TC, TD]>;
    combineLatest<C extends ObservableContainer.Type, TA, TB, TC, TD, TE>(a: Container.Of<C, TA>, b: Container.Of<C, TB>, c: Container.Of<C, TC>, d: Container.Of<C, TD>, e: Container.Of<C, TE>): Container.Of<C, readonly [TA, TB, TC, TD, TE]>;
    combineLatest<C extends ObservableContainer.Type, TA, TB, TC, TD, TE, TF>(a: Container.Of<C, TA>, b: Container.Of<C, TB>, c: Container.Of<C, TC>, d: Container.Of<C, TD>, e: Container.Of<C, TE>, f: Container.Of<C, TF>): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF]>;
    combineLatest<C extends ObservableContainer.Type, TA, TB, TC, TD, TE, TF, TG>(a: Container.Of<C, TA>, b: Container.Of<C, TB>, c: Container.Of<C, TC>, d: Container.Of<C, TD>, e: Container.Of<C, TE>, f: Container.Of<C, TF>, g: Container.Of<C, TG>): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    combineLatest<C extends ObservableContainer.Type, TA, TB, TC, TD, TE, TF, TG, TH>(a: Container.Of<C, TA>, b: Container.Of<C, TB>, c: Container.Of<C, TC>, d: Container.Of<C, TD>, e: Container.Of<C, TE>, f: Container.Of<C, TF>, g: Container.Of<C, TG>, h: Container.Of<C, TH>): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    combineLatest<C extends ObservableContainer.Type, TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: Container.Of<C, TA>, b: Container.Of<C, TB>, c: Container.Of<C, TC>, d: Container.Of<C, TD>, e: Container.Of<C, TE>, f: Container.Of<C, TF>, g: Container.Of<C, TG>, h: Container.Of<C, TH>, i: Container.Of<C, TI>): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}
declare const Observable_combineLatest: ObservableCombineLatest["combineLatest"];
export default Observable_combineLatest;
