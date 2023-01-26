import { ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { AsyncEnumeratorLike, AsyncEnumerableLike } from "../../../ix.js";
declare const AsyncEnumerable$lift: <TA, TB>(operator: Function1<AsyncEnumeratorLike<TA>, AsyncEnumeratorLike<TB>>) => ContainerOperator<AsyncEnumerableLike<unknown>, TA, TB>;
export { AsyncEnumerable$lift as default };
