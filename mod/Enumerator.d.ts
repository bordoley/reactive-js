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
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const pick: Signature["pick"];
export declare const toObservable: Signature["toObservable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
