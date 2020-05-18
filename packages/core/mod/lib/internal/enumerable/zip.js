import { current, enumerate, hasCurrent } from "./enumerator.js";
import { pipe } from "../../functions.js";
import { everySatisfy, map } from "../../readonlyArray.js";
const moveAll = (enumerators) => {
    for (const enumerator of enumerators) {
        enumerator.move();
    }
};
const allHaveCurrent = (enumerators) => pipe(enumerators, everySatisfy(hasCurrent));
class ZipEnumerator {
    constructor(enumerators) {
        this.enumerators = enumerators;
        this.current = [];
        this.hasCurrent = false;
    }
    move() {
        this.hasCurrent = false;
        const enumerators = this.enumerators;
        moveAll(enumerators);
        const hasCurrent = allHaveCurrent(enumerators);
        this.hasCurrent = hasCurrent;
        this.current = hasCurrent ? pipe(enumerators, map(current)) : [];
        return hasCurrent;
    }
}
export function zipEnumerators(enumerators) {
    return new ZipEnumerator(enumerators);
}
class ZipEnumerable {
    constructor(enumerables) {
        this.enumerables = enumerables;
    }
    enumerate() {
        return pipe(this.enumerables, map(enumerate), zipEnumerators);
    }
}
export function zip(...enumerables) {
    return new ZipEnumerable(enumerables);
}
export const zipWith = (snd) => fst => zip(fst, snd);
