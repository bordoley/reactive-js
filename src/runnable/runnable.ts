import { AbstractReactiveContainer } from "../__internal__.reactive";
import { RunnableLike } from "../runnable";
import { RunnableSink } from "../runnableSink";

export abstract class AbstractRunnable<T>
  extends AbstractReactiveContainer<T, RunnableSink<T>>
  implements RunnableLike<T> {}
