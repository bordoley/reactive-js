import { Container, ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
declare const Container_flatMapIterable: <C extends Container>(concatMap: <TA, TB>(selector: Function1<TA, import("../../../containers.js").ContainerOf<C, TB>>) => ContainerOperator<C, TA, TB>, fromIterable: <T>() => Function1<Iterable<T>, import("../../../containers.js").ContainerOf<C, T>>) => <TA_1, TB_1>(selector: Function1<TA_1, Iterable<TB_1>>) => ContainerOperator<C, TA_1, TB_1>;
export default Container_flatMapIterable;
