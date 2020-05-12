import { AbstractDisposable } from "../../disposable.js";
import { dispatch } from "./dispatcher.js";
import { toDispatcher } from "./toDispatcher.js";
class SubjectImpl extends AbstractDisposable {
    constructor(replayCount) {
        super();
        this.replayCount = replayCount;
        this.subscribers = new Set();
        this.replayed = [];
        this.isSynchronous = false;
    }
    get subscriberCount() {
        return this.subscribers.size;
    }
    dispatch(next) {
        if (!this.isDisposed) {
            const replayed = this.replayed;
            const replayCount = this.replayCount;
            if (replayCount > 0) {
                replayed.push(next);
                if (replayed.length > replayCount) {
                    replayed.shift();
                }
            }
            for (const subscriber of this.subscribers) {
                dispatch(subscriber, next);
            }
        }
    }
    subscribe(subscriber) {
        const dispatcher = toDispatcher(subscriber);
        if (!this.isDisposed) {
            const subscribers = this.subscribers;
            subscribers.add(dispatcher);
            subscriber.add(() => {
                subscribers.delete(dispatcher);
            });
        }
        for (const next of this.replayed) {
            dispatch(dispatcher, next);
        }
        this.add(dispatcher);
    }
}
export const createSubject = (replayCount = 0) => new SubjectImpl(replayCount);
