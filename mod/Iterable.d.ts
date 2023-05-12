import { Function1 } from "./functions.js";
import { BlockingContainerBaseTypeClass, ConcreteContainerBaseTypeClass, EnumerableContainerBaseTypeClass } from "./type-classes.js";
import { EnumerableLike, IterableContainer, RunnableLike } from "./types.js";
export type Type = IterableContainer;
export interface Signature extends ConcreteContainerBaseTypeClass<Type>, BlockingContainerBaseTypeClass<Type>, EnumerableContainerBaseTypeClass<Type> {
    toEnumerable<T>(): Function1<Iterable<T>, EnumerableLike<T>>;
    toRunnable<T>(): Function1<Iterable<T>, EnumerableLike<T>>;
    toRunnable<T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, RunnableLike<T>>;
}
export declare const enumerate: Signature["enumerate"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const toEnumerable: Signature["toEnumerable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toRunnable: Signature["toRunnable"];
