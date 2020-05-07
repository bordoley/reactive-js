class GenerateEnumerator {
    constructor(f, acc) {
        this.f = f;
        this.hasCurrent = false;
        this.current = acc;
    }
    move() {
        this.hasCurrent = true;
        this.current = this.f(this.current);
        return true;
    }
}
class GenerateEnumerable {
    constructor(f, acc) {
        this.f = f;
        this.acc = acc;
    }
    enumerate() {
        return new GenerateEnumerator(this.f, this.acc());
    }
}
export const generate = (generator, initialValue) => new GenerateEnumerable(generator, initialValue);
