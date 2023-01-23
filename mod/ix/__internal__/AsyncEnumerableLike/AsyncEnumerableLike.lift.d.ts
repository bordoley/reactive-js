import { ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { AsyncEnumeratorLike, AsyncEnumerableLike } from "../../../ix.js";
declare const AsyncEnumerableLike__lift: <TA, TB>(operator: Function1<AsyncEnumeratorLike<TA>, AsyncEnumeratorLike<TB>>) => ContainerOperator<AsyncEnumerableLike<unknown>, TA, TB>;
export { AsyncEnumerableLike__lift as default };
