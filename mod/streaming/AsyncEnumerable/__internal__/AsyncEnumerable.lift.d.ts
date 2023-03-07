import { ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { AsyncEnumerableLike, StreamLike } from "../../../streaming.js";
declare const AsyncEnumerable_lift: (isEnumerable: boolean, isRunnable: boolean) => <TA, TB>(operator: Function1<StreamLike<void, TA>, StreamLike<void, TB>>) => ContainerOperator<AsyncEnumerableLike<unknown>, TA, TB>;
export default AsyncEnumerable_lift;
