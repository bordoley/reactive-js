# @reactive-js/rx-core

Core interfaces for reactive programming in reactive-js.

## Usage

```typescript
import { connect, observe, Observable } from "@reactive-js/rx-core";
import { EventLoopScheduler } from "@reactive-js/eventloop-scheduler";

const scheduler = EventLoopScheduler.create(1);
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
const subscription = connect(observable, scheduler);
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

*`connect<T>(observable: ObservableLike<T>, scheduler: SchedulerLike): DisposableLike`*

*`notify<T>(observer: ObserverLike<T>, notification: Notification<T>)`*

*`observe<T>(observer: ObserverLike<T>): Operator<T, T>`*

*`observeOn<T>(priority?: number): Operator<T, T>`*

*`Observable.create = <T>(onSubscribe: (subscriber: SubscriberLike<T>) => void, delay?: number): ObservableLike<T>`*

*`Observable.lift(source: ObservableLike<any>,operator: Operator<any, any>,...operators: Array<Operator<any, any>>): ObservableLike<any>`*

*`ObservableResource.lift(source: ObservableResourceLike<any>, operator: Operator<any, any>, ...operators: Array<Operator<any, any>>): ObservableResourceLike<any>`*
