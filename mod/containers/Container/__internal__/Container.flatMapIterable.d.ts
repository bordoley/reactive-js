import { ConcatMap, ContainerLike, ContainerOperator, FromIterable, IterableLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
declare const Container_flatMapIterable: <C extends ContainerLike, O = never>(concatMap: <TA, TB>(mapper: Function1<TA, import("../../../containers.js").ContainerOf<C, TB>>, options?: undefined) => ContainerOperator<C, TA, TB>, fromIterable: <T>(options?: O | undefined) => Function1<Iterable<T>, import("../../../containers.js").ContainerOf<C, T>>) => <TA_1, TB_1>(mapper: Function1<TA_1, IterableLike<TB_1>>, options?: O | undefined) => ContainerOperator<C, TA_1, TB_1>;
export default Container_flatMapIterable;
