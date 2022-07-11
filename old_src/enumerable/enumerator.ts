import { getDelegate } from "../__internal__.delegating";
import { AbstractEnumerator } from "../__internal__.enumerator";
import { Disposable } from "../disposable";
import { EnumeratorLike, getCurrent, hasCurrent } from "../enumerator";
import { pipe, raise } from "../functions";

export abstract class AbstractDelegatingEnumerator<
  TIn,
  TOut,
> extends AbstractEnumerator<TOut> {
  constructor(readonly delegate: EnumeratorLike<TIn>) {
    super();
  }
}

export abstract class AbstractPassThroughEnumerator<T>
  extends Disposable
  implements EnumeratorLike<T>
{
  constructor(readonly delegate: EnumeratorLike<T>) {
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

export class NeverEnumerator<T>
  extends Disposable
  implements EnumeratorLike<T>
{
  get current(): T {
    return raise();
  }

  get hasCurrent(): boolean {
    return false;
  }

  move(): boolean {
    return false;
  }
}
