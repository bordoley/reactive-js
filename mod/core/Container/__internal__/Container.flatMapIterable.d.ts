import { Container } from "../../../core.js";
import { Function1 } from "../../../functions.js";
declare const Container_flatMapIterable: <C extends Container>(concatMap: <TA, TB>(selector: Function1<TA, Container.Of<C, TB>>) => Container.Operator<C, TA, TB>, fromIterable: <T>() => Function1<Iterable<T>, Container.Of<C, T>>) => <TA_1, TB_1>(selector: Function1<TA_1, Iterable<TB_1>>) => Container.Operator<C, TA_1, TB_1>;
export default Container_flatMapIterable;
