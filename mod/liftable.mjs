/// <reference types="./liftable.d.ts" />
import { AbstractContainer, AbstractDisposableContainer } from './container.mjs';
import { raise } from './functions.mjs';

class AbstractLiftable extends AbstractContainer {
    get TLiftableState() {
        return raise();
    }
}
class AbtractDisposableLiftable extends AbstractDisposableContainer {
    get TLiftableState() {
        return raise();
    }
}
const getDelegate = (s) => s.delegate;
const covariant = 0;
const contraVariant = 1;
const lift = (m) => op => m.lift(op);

export { AbstractLiftable, AbtractDisposableLiftable, contraVariant, covariant, getDelegate, lift };
