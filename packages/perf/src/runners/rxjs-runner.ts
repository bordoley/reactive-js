import { Observable } from "rxjs";

export const run = <T>(observable: Observable<T>, deferred: any) => {
  observable.subscribe({
    next: _ => {},
    complete: () => {
      if (deferred != null) {
        deferred.resolve();
      }
    },
    error: error => {
      if (deferred != null) {
        deferred.benchmark.emit({ type: "error", error: error });
        deferred.resolve(error);
      }
    },
  });
};
