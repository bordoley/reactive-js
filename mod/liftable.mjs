/// <reference types="./liftable.d.ts" />
import { AbstractContainer, AbstractDisposableContainer } from './container.mjs';
import { bindDisposables } from './disposable.mjs';
import { raise, strictEquality } from './functions.mjs';

class AbstractLiftable extends AbstractContainer {
    get liftedStateType() {
        return raise();
    }
}
class AbstractDisposableLiftable extends AbstractDisposableContainer {
    get liftedStateType() {
        return raise();
    }
}
const createDistinctUntilChangedLiftedOperator = (m, DistinctUntilChangedLiftedState) => {
    return (options = {}) => {
        const { equality = strictEquality } = options;
        const operator = (delegate) => {
            const sink = new DistinctUntilChangedLiftedState(delegate, equality);
            bindDisposables(sink, delegate);
            return sink;
        };
        return m.lift(operator);
    };
};

export { AbstractDisposableLiftable, AbstractLiftable, createDistinctUntilChangedLiftedOperator };
