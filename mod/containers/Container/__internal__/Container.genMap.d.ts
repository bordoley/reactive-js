import { ConcatAll, ContainerLike, ContainerOperator, FromIterable, Map } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
declare const Container_genMap: <C extends ContainerLike, TA, TB, O = never>(m: ConcatAll<C, never> & Map<C, never> & FromIterable<C, O>, mapper: Function1<TA, Generator<TB, any, any>>, options?: O | undefined) => ContainerOperator<C, TA, TB>;
export default Container_genMap;
