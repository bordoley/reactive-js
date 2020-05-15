export const notifyDistinctUntilChanged = (self, next) => {
    const shouldEmit = !self.hasValue || !self.equality(self.prev, next);
    if (shouldEmit) {
        self.prev = next;
        self.hasValue = true;
        self.delegate.notify(next);
    }
};
export const notifyKeepType = (self, next) => {
    if (self.predicate(next)) {
        self.delegate.notify(next);
    }
};
export const notifyMap = (self, next) => {
    const mapped = self.mapper(next);
    self.delegate.notify(mapped);
};
export const notifyScan = (self, next) => {
    const nextAcc = self.scanner(self.acc, next);
    self.acc = nextAcc;
    self.delegate.notify(nextAcc);
};
