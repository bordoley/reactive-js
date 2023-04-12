import { ContainerLike, ContainerOf, FromFactory, FromOptional, Map } from "../../../containers.js";
import { Factory } from "../../../functions.js";
declare const Container_fromFactory: <C extends ContainerLike, O = never>(fromOptional: <T>(options?: O | undefined) => import("../../../functions.js").Function1<import("../../../functions.js").Optional<T>, ContainerOf<C, T>>, map: <TA, TB>(selector: import("../../../functions.js").Function1<TA, TB>, options?: undefined) => import("../../../containers.js").ContainerOperator<C, TA, TB>) => <T_1>(factory: Factory<T_1>, options?: O | undefined) => ContainerOf<C, T_1>;
export default Container_fromFactory;
