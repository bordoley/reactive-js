class NeverObservable {
    constructor() {
        this.isSynchronous = false;
    }
    observe(_) { }
}
const neverInstance = new NeverObservable();
export const never = () => neverInstance;
