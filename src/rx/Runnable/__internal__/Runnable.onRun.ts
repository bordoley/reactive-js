import { Factory } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import { DisposableOrTeardown } from "../../../util.js";
import ReactiveContainer_onSink from "../../ReactiveContainer/__internal__/ReactiveContainer.onSink.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_onRun =
  <T>(f: Factory<DisposableOrTeardown | void>) =>
  (runnable: RunnableLike<T>): RunnableLike<T> =>
    ReactiveContainer_onSink(Runnable_create, runnable, f);

export default Runnable_onRun;
