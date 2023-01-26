import { Factory } from "../../../functions";
import { RunnableLike } from "../../../rx";
import { DisposableOrTeardown } from "../../../util";
import ReactiveContainer$onSink from "../ReactiveContainer/ReactiveContainer.onSink";
import Runnable$create from "./Runnable.create";

const Runnable$onRun =
  <T>(f: Factory<DisposableOrTeardown | void>) =>
  (runnable: RunnableLike<T>): RunnableLike<T> =>
    ReactiveContainer$onSink(Runnable$create, runnable, f);

export default Runnable$onRun;
