import { ContainerOperator } from "../../../containers.js";
import { AsyncEnumerableLike, EnumerableAsyncEnumerableLike, RunnableAsyncEnumerableLike } from "../../../ix.js";
import { EnumerableObservableLike, ObservableLike, RunnableLike } from "../../../rx.js";
interface AsyncEnumerable_CreateBase {
    <A>(op1: ContainerOperator<ObservableLike, void, A>, isEnumerable: false, isRunnable: false): AsyncEnumerableLike<A>;
    <A>(op1: ContainerOperator<RunnableLike, void, A>, isEnumerable: false, isRunnable: true): RunnableAsyncEnumerableLike<A>;
    <A>(op1: ContainerOperator<EnumerableObservableLike, void, A>, isEnumerable: true, isRunnable: true): EnumerableAsyncEnumerableLike<A>;
}
declare const AsyncEnumerable_createBase: AsyncEnumerable_CreateBase;
export default AsyncEnumerable_createBase;
