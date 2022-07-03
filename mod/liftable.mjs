/// <reference types="./liftable.d.ts" />
import { AbstractDisposableContainer } from './container.mjs';
import { raise } from './functions.mjs';

class AbtractDisposableLiftable extends AbstractDisposableContainer {
    get TLiftableState() {
        return raise();
    }
}

export { AbtractDisposableLiftable };
