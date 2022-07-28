import { EnumeratorLike, EnumeratorLike_current, EnumeratorLike_hasCurrent } from "../../util.mjs";
import { Object_properties, Object_init } from "./Object.mjs";
declare const DelegatingEnumerator_move_delegate: unique symbol;
declare type TPrototype<T> = {
    [Object_properties]: unknown;
    [Object_init](this: unknown, delegate: EnumeratorLike<T>): void;
    [DelegatingEnumerator_move_delegate](): boolean;
    readonly [EnumeratorLike_current]: T;
    readonly [EnumeratorLike_hasCurrent]: boolean;
};
interface DelegatingEnumeratorLike<T> extends EnumeratorLike<T> {
    [DelegatingEnumerator_move_delegate](): boolean;
}
declare const prototype: <T>() => TPrototype<T>;
declare const move: (enumerator: {
    [DelegatingEnumerator_move_delegate](): boolean;
}) => boolean;
export { DelegatingEnumeratorLike, move, prototype };
