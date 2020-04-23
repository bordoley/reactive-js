import { DisposableLike, createDisposable } from "@reactive-js/disposable";
import { Option, isSome } from "@reactive-js/option";
import {
  SchedulerLike,
  AbstractHostScheduler,
} from "@reactive-js/scheduler";

const performance = window.performance;
const Date = window.Date;
const setTimeout = window.setTimeout;
const clearTimeout = window.clearTimeout;

const now =
  typeof performance === "object" && typeof performance.now === "function"
    ? () => performance.now()
    : () => Date.now();

const yieldInterval = 5;
const maxYieldInterval = 300;

const callCallbackAndDispose = (
  callback: (shouldYield: Option<() => boolean>) => void,
  disposable: DisposableLike,
) => {
  startTime = now();
  callback(shouldYield);
  disposable.dispose();
};

const shouldYield =
  isSome(navigator) &&
  isSome((navigator as any).scheduling) &&
  isSome((navigator as any).scheduling.isInputPending)
    ? () => {
        const currentTime = now();
        const deadline = startTime + yieldInterval;
        const maxDeadline = startTime + maxYieldInterval;
        const inputPending = (navigator as any).scheduling.isInputPending();

        return (
          (currentTime >= deadline && inputPending) ||
          currentTime >= maxDeadline
        );
      }
    : () => now() >= startTime + yieldInterval;

const channel = new MessageChannel();

class WebScheduler extends AbstractHostScheduler {
  get now(): number {
    const hr = process.hrtime();
    return hr[0] * 1000 + hr[1] / 1e6;
  }

  scheduleImmediate(
    callback: (shouldYield: Option<() => boolean>) => void,
  ): DisposableLike {
    const disposable = createDisposable();
  
    channel.port1.onmessage = () => {
      if (!disposable.isDisposed) {
        startTime = now();
        callback(shouldYield);
        disposable.dispose();
      }
    };
    channel.port2.postMessage(null);
    return disposable;
  };
  
  scheduleDelayed(
    callback: (shouldYield: Option<() => boolean>) => void,
    delay: number,
  ): DisposableLike {
    if (delay >= 4) {
      // setTimeout has a floor of 4ms so for lesser delays
      // just schedule immediately.
      return this.scheduleImmediate(callback);
    } else {
      const disposable = createDisposable(() => clearTimeout(timeout));
      const timeout = setTimeout(
        callCallbackAndDispose,
        delay,
        callback,
        disposable,
      );
      return disposable;
    }
  };
}

const schedulerImpl = new WebScheduler();
let startTime = schedulerImpl.now;

export const scheduler: SchedulerLike = schedulerImpl;
