import { ContainerLike, FromArrayOptions, FromArray, ContainerOf } from "../../../containers.mjs";
import { Function1, Option } from "../../../functions.mjs";
declare const fromOption: <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>({ fromArray }: FromArray<C, O>, options?: Omit<Partial<O>, keyof FromArrayOptions> | undefined) => Function1<Option<T>, ContainerOf<C, T>>;
export { fromOption as default };
