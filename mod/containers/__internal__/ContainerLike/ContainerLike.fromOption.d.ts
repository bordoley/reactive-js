import { ContainerLike, FromArrayOptions, FromArray, ContainerOf } from "../../../containers.mjs";
import { Function1, Optional } from "../../../functions.mjs";
declare const ContainerLike__fromOption: <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>({ fromArray }: FromArray<C, O>, options?: Omit<Partial<O>, keyof FromArrayOptions> | undefined) => Function1<Optional<T>, ContainerOf<C, T>>;
export { ContainerLike__fromOption as default };
