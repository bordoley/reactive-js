import { ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { AsyncEnumerableLike, AsyncEnumeratorLike } from "../../../ix.js";
declare const AsyncEnumerable_lift: <TA, TB>(operator: Function1<AsyncEnumeratorLike<TA>, AsyncEnumeratorLike<TB>>) => ContainerOperator<AsyncEnumerableLike<unknown>, TA, TB>;
export default AsyncEnumerable_lift;
