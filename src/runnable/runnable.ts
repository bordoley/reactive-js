import { AbstractReactiveSource } from "../__internal__.reactive";
import { RunnableLike } from "../runnable";
import { RunnableSink } from "../runnableSink";

export abstract class AbstractRunnable<T>
  extends AbstractReactiveSource<T, RunnableSink<T>>
  implements RunnableLike<T> {}
