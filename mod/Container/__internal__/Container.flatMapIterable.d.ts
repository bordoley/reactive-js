import { Function1 } from "../../functions.js";
import { DeferredTypeClass } from "../../type-classes.js";
import { Container, ContainerOperator } from "../../types.js";
declare const Container_flatMapIterable: <C extends Container>(concatMap: <TA, TB>(selector: Function1<TA, import("../../types.js").ContainerOf<C, TB>>) => ContainerOperator<C, TA, TB>, fromIterable: <T>() => Function1<Iterable<T>, import("../../types.js").ContainerOf<C, T>>) => <TA_1, TB_1>(selector: Function1<TA_1, Iterable<TB_1>>) => ContainerOperator<C, TA_1, TB_1>;
export default Container_flatMapIterable;
