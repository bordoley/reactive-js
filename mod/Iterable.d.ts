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
export declare const empty: Signature["empty"];
export declare const enumerate: Signature["enumerate"];
export declare const fromEnumerable: Signature["fromEnumerable"];
export declare const fromFactory: Signature["fromFactory"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromOptional: Signature["fromOptional"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const fromEnumeratorFactory: Signature["fromEnumeratorFactory"];
export declare const toIterable: Signature["toIterable"];
export declare const toObservable: Signature["toObservable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
