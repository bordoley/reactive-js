import { Factory, Function1, Function2 } from "./functions.mjs";
import { ObservableLike } from "./observable.mjs";
import { StreamableLike } from "./streamable.mjs";
declare const notify: <TAcc>(acc: TAcc) => ConsumeRequest<TAcc>;
declare const done: <TAcc>(acc: TAcc) => ConsumeRequest<TAcc>;
declare const consume: <T, TAcc>(consumer: Consumer<T, TAcc>, initial: Factory<TAcc>) => Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>>;
declare const consumeAsync: <T, TAcc>(consumer: AsyncConsumer<T, TAcc>, initial: Factory<TAcc>) => Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>>;
/** @noInheritDoc */
interface AsyncEnumerableLike<T> extends StreamableLike<void, T> {
}
declare type ConsumeRequest<TAcc> = {
    readonly type: "notify";
    readonly acc: TAcc;
} | {
    readonly type: "done";
    readonly acc: TAcc;
};
declare type Consumer<T, TAcc> = Function2<TAcc, T, ConsumeRequest<TAcc>>;
declare type AsyncConsumer<T, TAcc> = Function2<TAcc, T, ObservableLike<ConsumeRequest<TAcc>>>;
export { AsyncConsumer, AsyncEnumerableLike, ConsumeRequest, Consumer, consume, consumeAsync, done, notify };
