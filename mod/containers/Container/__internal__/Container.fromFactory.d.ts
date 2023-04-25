import { ContainerLike, ContainerOf, Map } from "../../../containers.js";
import { Factory, Function1, Optional } from "../../../functions.js";
declare const Container_fromFactory: <C extends ContainerLike, O = never>(fromOptional: <T>(options?: O | undefined) => Function1<Optional<T>, ContainerOf<C, T>>, map: <TA, TB>(selector: Function1<TA, TB>) => import("../../../containers.js").ContainerOperator<C, TA, TB>) => <T_1>(factory: Factory<T_1>, options?: O | undefined) => ContainerOf<C, T_1>;
export default Container_fromFactory;
