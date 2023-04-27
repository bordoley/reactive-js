import { Factory, Function1, Function2, Function3 } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
interface DisposableUsingAsync {
    usingAsync<TDisposable extends DisposableLike, TResult = unknown>(factoryOrDisposable: TDisposable | Factory<TDisposable>): Function1<Function1<TDisposable, Promise<TResult>>, Promise<TResult>>;
    usingAsync<TDisposableA extends DisposableLike, TDisposableB extends DisposableLike, TResult = unknown>(factoryOrDisposableA: TDisposableA | Factory<TDisposableA>, factoryOrDisposableB: TDisposableB | Factory<TDisposableB>): Function1<Function2<TDisposableA, TDisposableB, Promise<TResult>>, Promise<TResult>>;
    usingAsync<TDisposableA extends DisposableLike, TDisposableB extends DisposableLike, TDisposableC extends DisposableLike, TResult = unknown>(factoryOrDisposableA: TDisposableA | Factory<TDisposableA>, factoryOrDisposableB: TDisposableB | Factory<TDisposableB>, factoryOrDisposableC: TDisposableC | Factory<TDisposableC>): Function1<Function3<TDisposableA, TDisposableB, TDisposableC, Promise<TResult>>, Promise<TResult>>;
}
declare const Disposable_usingAsync: DisposableUsingAsync["usingAsync"];
export default Disposable_usingAsync;
