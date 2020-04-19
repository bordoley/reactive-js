import { DisposableLike, createDisposable } from "@reactive-js/disposable";
import { Option, isSome } from "@reactive-js/option";
import {
  SchedulerLike,
  schedule,
  CallbackSchedulerLike,
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

const scheduleImmediate = (
  callback: (shouldYield: Option<() => boolean>) => void,
): DisposableLike => {
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

const scheduleDelayed = (
  callback: (shouldYield: Option<() => boolean>) => void,
  delay: number,
): DisposableLike => {
  const disposable = createDisposable(() => clearTimeout(timeout));
  const timeout = setTimeout(
    callCallbackAndDispose,
    delay,
    callback,
    disposable,
  );
  return disposable;
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

const schedulerImpl: CallbackSchedulerLike = {
  inContinuation: false,
  get now() {
    return now();
  },
  schedule,
  scheduleCallback(
    callback: (shouldYield: Option<() => boolean>) => void,
    delay: number,
  ): DisposableLike {
    // setTimeout has a floor of 4ms so for lesser delays
    // just schedule immediately.
    return delay >= 4
      ? scheduleDelayed(callback, delay)
      : scheduleImmediate(callback);
  },
};

let startTime = now();

export const scheduler: SchedulerLike = schedulerImpl;
