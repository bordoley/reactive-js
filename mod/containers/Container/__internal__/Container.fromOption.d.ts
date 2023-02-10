import { ContainerLike, FromArray, ContainerOf } from "../../../containers.js";
import { Function1, Optional } from "../../../functions.js";
declare const Container_fromOption: <C extends ContainerLike, T, O extends {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
} = {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
}>({ fromArray }: FromArray<C, O>, options?: O | undefined) => Function1<Optional<T>, ContainerOf<C, T>>;
export { Container_fromOption as default };
