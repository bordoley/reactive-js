import { AbstractSource } from "../__internal__.source";
import { RunnableLike } from "../runnable";
import { RunnableSink } from "../runnableSink";

export abstract class AbstractRunnable<T>
  extends AbstractSource<T, RunnableSink<T>>
  implements RunnableLike<T> {}
