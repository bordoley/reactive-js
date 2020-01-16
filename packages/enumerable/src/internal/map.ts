import { AbstractDelegatingEnumerator } from "./enumerator";
import { EnumeratorLike, EnumerableLike } from "./interfaces";

class MappedEnumerator<TReq, TA, TB> extends AbstractDelegatingEnumerator<
  TReq,
  TA,
  TB
> {
  current: any = undefined;
  hasCurrent = false;

  constructor(
    delegate: EnumeratorLike<TReq, TA>,
    readonly mapper: (a: TA) => TB,
  ) {
    super(delegate);
    this.add(delegate);
  }

  move(req: TReq): boolean {
    const enumerator = this.delegate;
    const hasCurrent = enumerator.move(req);
    this.hasCurrent = hasCurrent;

    if (hasCurrent) {
      this.current = this.mapper(enumerator.current);
    }

    return hasCurrent;
  }
}

class MappedEnumerable<TReq, TA, TB> implements EnumerableLike<TReq, TB> {
  constructor(
    readonly delegate: EnumerableLike<TReq, TA>,
    readonly mapper: (a: TA) => TB,
  ) {}

  enumerate() {
    return new MappedEnumerator(this.delegate.enumerate(), this.mapper);
  }
}

/** @ignore */
export const map = <TReq, TA, TB>(mapper: (a: TA) => TB) => (
  enumerable: EnumerableLike<TReq, TA>,
): EnumerableLike<TReq, TB> => new MappedEnumerable(enumerable, mapper);
