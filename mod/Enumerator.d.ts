import { Function1 } from "./functions.js";
import { BlockingContainerBaseTypeClass, ConcreteContainerBaseTypeClass, ContainerTypeClass } from "./type-classes.js";
import { EnumerableLike, EnumeratorContainer, EnumeratorLike, RunnableLike } from "./types.js";
export type Type = EnumeratorContainer;
export interface EnumeratorModule extends ConcreteContainerBaseTypeClass<Type>, BlockingContainerBaseTypeClass<Type>, ContainerTypeClass<Type> {
    toObservable<T>(): Function1<EnumeratorLike<T>, EnumerableLike<T>>;
    toObservable<T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): Function1<EnumeratorLike<T>, RunnableLike<T>>;
}
export type Signature = EnumeratorModule;
export declare const empty: Signature["empty"];
export declare const forEach: Signature["forEach"];
export declare const fromEnumeratorFactory: Signature["fromEnumeratorFactory"];
export declare const fromFactory: Signature["fromFactory"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromOptional: Signature["fromOptional"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const pairwise: Signature["pairwise"];
export declare const pick: Signature["pick"];
export declare const scan: Signature["scan"];
export declare const toObservable: Signature["toObservable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
