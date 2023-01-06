import { Factory } from "../../../functions";
import { RunnableLike } from "../../../rx";
import { DisposableOrTeardown } from "../../../util";
import ReactiveContainerLike__onSink from "../ReactiveContainerLike/ReactiveContainerLike.onSink";
import RunnableLike__create from "./RunnableLike.create";

const RunnableLike__onRun =
  <T>(f: Factory<DisposableOrTeardown | void>) =>
  (runnable: RunnableLike<T>): RunnableLike<T> =>
    ReactiveContainerLike__onSink(RunnableLike__create, runnable, f);

export default RunnableLike__onRun;
