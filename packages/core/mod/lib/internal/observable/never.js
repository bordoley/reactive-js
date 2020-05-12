class NeverObservable {
    constructor() {
        this.isSynchronous = false;
    }
    subscribe(_) { }
}
const neverInstance = new NeverObservable();
export const never = () => neverInstance;
