import { Compute, ContainerLike, ContainerOf, FromReadonlyArray, Map } from "../../../containers.js";
import { Factory } from "../../../functions.js";
declare const Container_compute: <C extends ContainerLike, O = never>(fromReadonlyArray: <T>(options?: (O & {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
}) | undefined) => import("../../../functions.js").Function1<readonly T[], ContainerOf<C, T>>, map: <TA, TB>(mapper: import("../../../functions.js").Function1<TA, TB>, options?: undefined) => import("../../../containers.js").ContainerOperator<C, TA, TB>) => <T_1>(factory: Factory<T_1>, options?: O | undefined) => ContainerOf<C, T_1>;
export default Container_compute;
