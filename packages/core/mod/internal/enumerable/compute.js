import { fromArray } from "./fromArray.js";
class ComputeEnumerable {
    constructor(f) {
        this.f = f;
    }
    enumerate() {
        return fromArray([this.f()]).enumerate();
    }
}
export const compute = (f) => new ComputeEnumerable(f);
