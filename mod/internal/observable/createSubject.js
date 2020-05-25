import { AbstractDisposable, addTeardown, addDisposable, } from "../../disposable.js";
import { dispatch } from "./dispatcher.js";
import { toDispatcher } from "./toDispatcher.js";
class SubjectImpl extends AbstractDisposable {
    constructor(replay) {
        super();
        this.replay = replay;
        this.observers = new Set();
        this.replayed = [];
        this.isSynchronous = false;
    }
    get observerCount() {
        return this.observers.size;
    }
    dispatch(next) {
        if (!this.isDisposed) {
            const replayed = this.replayed;
            const replay = this.replay;
            if (replay > 0) {
                replayed.push(next);
                if (replayed.length > replay) {
                    replayed.shift();
                }
            }
            for (const observer of this.observers) {
                dispatch(observer, next);
            }
        }
    }
    observe(observer) {
        const dispatcher = toDispatcher(observer);
        if (!this.isDisposed) {
            const observers = this.observers;
            observers.add(dispatcher);
            addTeardown(observer, _e => {
                observers.delete(dispatcher);
            });
        }
        for (const next of this.replayed) {
            dispatch(dispatcher, next);
        }
        addDisposable(this, dispatcher);
    }
}
export const createSubject = (options = {}) => {
    const { replay = 0 } = options;
    return new SubjectImpl(replay);
};
