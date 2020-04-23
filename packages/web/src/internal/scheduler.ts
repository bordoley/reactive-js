import { DisposableLike, createDisposable } from "@reactive-js/disposable";
import { Option, isSome } from "@reactive-js/option";
import { AbstractHostScheduler } from "@reactive-js/scheduler";

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

const channel = new MessageChannel();

class WebScheduler extends AbstractHostScheduler {
  startTime = this.now;

  private readonly shouldYield =
    isSome(navigator) &&
    isSome((navigator as any).scheduling) &&
    isSome((navigator as any).scheduling.isInputPending)
      ? () => {
          const currentTime = now();
          const deadline = this.startTime + yieldInterval;
          const maxDeadline = this.startTime + maxYieldInterval;
          const inputPending = (navigator as any).scheduling.isInputPending();

          return (
            (currentTime >= deadline && inputPending) ||
            currentTime >= maxDeadline
          );
        }
      : () => now() >= this.startTime + yieldInterval;


  get now(): number {
    return now();
  }

  scheduleImmediate(
    callback: (shouldYield: Option<() => boolean>) => void,
  ): DisposableLike {
    const disposable = createDisposable();
  
    channel.port1.onmessage = () => {
      if (!disposable.isDisposed) {
        this.startTime = this.now;
        callback(this.shouldYield);
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
        () => {
          this.startTime = now();
          callback(this.shouldYield);
          disposable.dispose();
        },
        delay,
      );
      return disposable;
    }
  };
}

export const scheduler = /*@__PURE__*/ new WebScheduler();
