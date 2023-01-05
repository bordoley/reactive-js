import { ContainerOperator } from "../../../containers.mjs";
import { Function1 } from "../../../functions.mjs";
import { AsyncEnumeratorLike, AsyncEnumerableLike } from "../../../ix.mjs";
declare const AsyncEnumerableLike__lift: <TA, TB>(operator: Function1<AsyncEnumeratorLike<TA>, AsyncEnumeratorLike<TB>>) => ContainerOperator<AsyncEnumerableLike<unknown>, TA, TB>;
export { AsyncEnumerableLike__lift as default };
