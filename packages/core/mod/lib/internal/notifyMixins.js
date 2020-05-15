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
export const notifySkipFirst = (self, next) => {
    self.count++;
    if (self.count > self.skipCount) {
        self.delegate.notify(next);
    }
};
export const notifyTakeLast = (self, next) => {
    const last = self.last;
    last.push(next);
    if (last.length > self.maxCount) {
        last.shift();
    }
};
