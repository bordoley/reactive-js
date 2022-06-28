import { RunnableLike } from "../runnable";
import { RunnableSink } from "../runnableSink";
import { AbstractSource } from "../source";

export abstract class AbstractRunnable<T>
  extends AbstractSource<T, RunnableSink<T>>
  implements RunnableLike<T> {}
