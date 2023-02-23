import { ConcatAll, ContainerLike, ContainerOperator, FromIterable, IterableLike, Map } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
declare const Container_flatMapIterable: <C extends ContainerLike, O = never>(concatAll: <T>(options?: undefined) => ContainerOperator<C, import("../../../containers.js").ContainerOf<C, T>, T>, fromIterable: <T_1>(options?: O | undefined) => Function1<Iterable<T_1>, import("../../../containers.js").ContainerOf<C, T_1>>, map: <TA, TB>(mapper: Function1<TA, TB>, options?: undefined) => ContainerOperator<C, TA, TB>) => <TA_1, TB_1>(mapper: Function1<TA_1, IterableLike<TB_1>>, options?: O | undefined) => ContainerOperator<C, TA_1, TB_1>;
export default Container_flatMapIterable;
