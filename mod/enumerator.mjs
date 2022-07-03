/// <reference types="./enumerator.d.ts" />
import { AbstractDisposableContainer } from './container.mjs';

class Enumerator extends AbstractDisposableContainer {
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
