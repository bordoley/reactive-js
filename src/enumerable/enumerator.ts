import { getDelegate } from "../__internal__.delegating";
import { AbstractEnumerator } from "../__internal__.enumerator";
import { Enumerator, getCurrent, hasCurrent } from "../enumerator";
import { pipe } from "../functions";

export abstract class AbstractDelegatingEnumerator<
  TIn,
  TOut,
> extends AbstractEnumerator<TOut> {
  constructor(readonly delegate: Enumerator<TIn>) {
    super();
  }
}

export abstract class AbstractPassThroughEnumerator<T> extends Enumerator<T> {
  constructor(readonly delegate: Enumerator<T>) {
    super();
  }

  get current(): T {
    return pipe(this, getDelegate, getCurrent);
  }

  get hasCurrent(): boolean {
    return pipe(this, getDelegate, hasCurrent);
  }

  abstract move(): boolean;
}
