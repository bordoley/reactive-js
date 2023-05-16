import { Function1 } from "./functions.js";
import { BlockingContainerBaseTypeClass, ConcreteContainerBaseTypeClass, EnumerableContainerBaseTypeClass } from "./type-classes.js";
import { EnumerableLike, IterableContainer, RunnableLike } from "./types.js";
export type Type = IterableContainer;
export interface IterableModule extends ConcreteContainerBaseTypeClass<Type>, BlockingContainerBaseTypeClass<Type>, EnumerableContainerBaseTypeClass<Type> {
    toObservable<T>(): Function1<Iterable<T>, EnumerableLike<T>>;
    toObservable<T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, RunnableLike<T>>;
}
export type Signature = IterableModule;
export declare const enumerate: Signature["enumerate"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const toObservable: Signature["toObservable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
