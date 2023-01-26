import { ContainerLike, FromArray, ContainerOf } from "../../../containers.js";
import { Function1, Optional } from "../../../functions.js";
declare const Container$fromOption: <C extends ContainerLike, T, O extends {
    readonly start: number;
    readonly count: number;
} = {
    readonly start: number;
    readonly count: number;
}>({ fromArray }: FromArray<C, O>, options?: Partial<O> | undefined) => Function1<Optional<T>, ContainerOf<C, T>>;
export { Container$fromOption as default };
