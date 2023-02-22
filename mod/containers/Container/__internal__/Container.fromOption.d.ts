import { ContainerLike, ContainerOf, FromReadonlyArray } from "../../../containers.js";
import { Function1, Optional } from "../../../functions.js";
declare const Container_fromOption: <C extends ContainerLike, O extends {
    start?: undefined;
    count?: undefined;
} = {
    start?: undefined;
    count?: undefined;
}>(fromReadonlyArray: <T>(options?: (O & {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
}) | undefined) => Function1<readonly T[], ContainerOf<C, T>>) => <T_1>(options?: O | undefined) => Function1<Optional<T_1>, ContainerOf<C, T_1>>;
export default Container_fromOption;
