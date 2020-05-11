import { fromArray } from "./fromArray.js";
import { enumerate } from "./enumerate.js";
class ComputeEnumerable {
    constructor(f) {
        this.f = f;
    }
    enumerate() {
        return enumerate(fromArray([this.f()]));
    }
}
export const compute = (f) => new ComputeEnumerable(f);
