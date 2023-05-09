import { Function1 } from "../../functions.js";
import { Container, Containers, DeferredContainers } from "../../types.js";
declare const Container_flatMapIterable: <C extends Container>(concatMap: <TA, TB>(selector: Function1<TA, Containers.Of<C, TB>>) => Containers.Operator<C, TA, TB>, fromIterable: <T>() => Function1<Iterable<T>, Containers.Of<C, T>>) => <TA_1, TB_1>(selector: Function1<TA_1, Iterable<TB_1>>) => Containers.Operator<C, TA_1, TB_1>;
export default Container_flatMapIterable;
