import { ContainerLike, ContainerOf, FromReadonlyArray } from "../../../containers.js";
import { Function1, Optional } from "../../../functions.js";
declare const Container_fromOption: <C extends ContainerLike, T, O extends {
    start?: undefined;
    count?: undefined;
} = {
    start?: undefined;
    count?: undefined;
}>({ fromReadonlyArray }: FromReadonlyArray<C, O>, options?: O | undefined) => Function1<Optional<T>, ContainerOf<C, T>>;
export default Container_fromOption;
