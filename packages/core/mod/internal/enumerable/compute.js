import { enumerate } from "./enumerator.js";
import { fromArray } from "./fromArray.js";
class ComputeEnumerable {
    constructor(f) {
        this.f = f;
    }
    enumerate() {
        return enumerate(fromArray([this.f()]));
    }
}
export const compute = (f) => new ComputeEnumerable(f);
