import { ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { AsyncEnumerableLike, StreamLike } from "../../../streaming.js";
import { DisposableLike } from "../../../util.js";
declare const AsyncEnumerable_lift: (isEnumerable: boolean, isRunnable: boolean) => <TA, TB>(operator: Function1<StreamLike<void, TA> & DisposableLike, StreamLike<void, TB> & DisposableLike>) => ContainerOperator<AsyncEnumerableLike<unknown>, TA, TB>;
export default AsyncEnumerable_lift;
