import { RunnableLike } from "../runnable";
import { AbstractSource } from "../source";
import { Sink } from "./sinks";

export abstract class AbstractRunnable<T>
  extends AbstractSource<T, Sink<T>>
  implements RunnableLike<T> {}
