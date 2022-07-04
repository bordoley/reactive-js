/// <reference types="./enumerator.d.ts" />
import { Disposable } from './disposable.mjs';
import { raise } from './functions.mjs';

class Enumerator extends Disposable {
    get T() {
        return raise();
    }
    get TContainerOf() {
        return this;
    }
}
const getCurrent = (enumerator) => enumerator.current;
const hasCurrent = (enumerator) => enumerator.hasCurrent;
const move = (enumerator) => enumerator.move();
const forEach = (f) => enumerator => {
    while (move(enumerator)) {
        f(getCurrent(enumerator));
    }
    return enumerator;
};

export { Enumerator, forEach, getCurrent, hasCurrent, move };
