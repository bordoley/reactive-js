# @reactive-js/rx-core

Core interfaces for reactive programming in reactive-js.

## Usage

```typescript
import { observe, Observable } from "@reactive-js/rx-core";
import { EventLoopScheduler } from "@reactive-js/eventloop-scheduler";

const scheduler = EventLoopScheduler.create(1);
defaultScheduler.register(scheduler);

const observable = Observable.lift(
  Observable.create(subscriber => {
    subscriber.next( "hello");
    subscriber.complete();
  }),
  observe({
    next: next => console.log("next: " + next),
    complete: err => console.log("complete: " + err),
  }),
);
const subscription = Observable.connect(observable);
subscription.dispose();
```

## API

### Interfaces

*Notification*

*ObservableLike*

*ObservableResourceLike*

*ObserverLike*

*Operator*

*SubscriberLike*

### Abstract Classes

*DelegatingSubscriber*

### Enumerations

*NotificationKind*

### Static Functions



*`notify<T>(observer: ObserverLike<T>, notification: Notification<T>)`*

*`observe<T>(observer: ObserverLike<T>): Operator<T, T>`*

*`Observable.connect<T>(observable: ObservableLike<T>, scheduler?: SchedulerLike): DisposableLike`*

*`Observable.create = <T>(onSubscribe: (observer: ObserverLike<T>) => DisposableLike | void, priority?: number): ObservableLike<T>`*

*`Observable.lift(source: ObservableLike<any>, operator: Operator<any, any>,...operators: Array<Operator<any, any>>): ObservableLike<any>`*

*`ObservableResource.lift(source: ObservableResourceLike<any>, operator: Operator<any, any>, ...operators: Array<Operator<any, any>>): ObservableResourceLike<any>`*

*`Subscriber.toSafeObserver<T>(subscriber: SubscriberLike<T>, priority?: number): ObserverLike<T>`*
