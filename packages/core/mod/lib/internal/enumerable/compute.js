import { pipe } from "../../functions.js";
import { enumerate } from "./enumerator.js";
import { fromArray } from "./fromArray.js";
class ComputeEnumerable {
    constructor(f) {
        this.f = f;
    }
    enumerate() {
        return pipe([this.f()], fromArray(), enumerate);
    }
}
export const compute = (f) => new ComputeEnumerable(f);
