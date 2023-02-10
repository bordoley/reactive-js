import { Factory } from "../../../functions";
import { RunnableLike } from "../../../rx";
import { DisposableOrTeardown } from "../../../util";
import ReactiveContainer_onSink from "../../ReactiveContainer/__internal__/ReactiveContainer.onSink";
import Runnable_create from "./Runnable.create";

const Runnable_onRun =
  <T>(f: Factory<DisposableOrTeardown | void>) =>
  (runnable: RunnableLike<T>): RunnableLike<T> =>
    ReactiveContainer_onSink(Runnable_create, runnable, f);

export default Runnable_onRun;
