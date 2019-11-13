import { Observable } from "rxjs";

export const run = <T>(observable: Observable<T>) => {
  observable.subscribe();
};
