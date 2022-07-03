import { ContainerLike, FromArrayOptions, ContainerOf } from "./container.mjs";
import { Function1 } from "./functions.mjs";
declare abstract class AbstractContainer implements ContainerLike {
    get TContainerOf(): this;
    get T(): unknown;
}
declare const createFromArray: <C extends ContainerLike, O extends FromArrayOptions = FromArrayOptions>(factory: <T>(values: readonly T[], startIndex: number, endIndex: number, options?: Partial<O> | undefined) => ContainerOf<C, T>) => <T_1>(options?: Partial<O>) => Function1<readonly T_1[], ContainerOf<C, T_1>>;
export { AbstractContainer, createFromArray };
