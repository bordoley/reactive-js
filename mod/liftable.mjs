/// <reference types="./liftable.d.ts" />
import { AbstractDisposableContainer } from './container.mjs';
import { raise } from './functions.mjs';

class AbtractDisposableLiftable extends AbstractDisposableContainer {
    get TLiftableState() {
        return raise();
    }
}
const covariant = 0;
const contraVariant = 1;
const lift = (m) => op => m.lift(op);

export { AbtractDisposableLiftable, contraVariant, covariant, lift };
