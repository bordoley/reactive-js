import { Equality, Function, TypePredicate, Reducer } from "../functions.ts";
import { Option } from "../option.ts";

export interface NotifiableLike<T> {
  notify(next: T): void;
}

export const notifyDistinctUntilChanged = <T>(
  self: {
    readonly delegate: NotifiableLike<T>;
    readonly equality: Equality<T>;
    prev: Option<T>;
    hasValue: boolean;
  },
  next: T,
) => {
  const shouldEmit = !self.hasValue || !self.equality(self.prev as T, next);

  if (shouldEmit) {
    self.prev = next;
    self.hasValue = true;
    self.delegate.notify(next);
  }
};

export const notifyKeepType = <TA, TB extends TA>(
  self: {
    readonly delegate: NotifiableLike<TB>;
    readonly predicate: TypePredicate<TA, TB>;
  },
  next: TA,
) => {
  if (self.predicate(next)) {
    self.delegate.notify(next);
  }
};

export const notifyMap = <TA, TB>(
  self: {
    readonly delegate: NotifiableLike<TB>;
    readonly mapper: Function<TA, TB>;
  },
  next: TA,
) => {
  const mapped = self.mapper(next);
  self.delegate.notify(mapped);
};

export const notifyScan = <T, TAcc>(
  self: {
    readonly delegate: NotifiableLike<TAcc>;
    acc: TAcc;
    readonly scanner: Reducer<T, TAcc>;
  },
  next: T,
) => {
  const nextAcc = self.scanner(self.acc, next);
  self.acc = nextAcc;

  self.delegate.notify(nextAcc);
};
