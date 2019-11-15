# @reactive-js/rx-core

Core interfaces for reactive programming in reactive-js.

## Usage

```typescript
import { connect, observe, Observable } from "@reactive-js/rx-core";
import { EventLoopScheduler } from "@reactive-js/eventloop-scheduler";

const scheduler = EventLoopScheduler.create(1);
const observableThatDoesNothing = Observable.lift(
  Observable.create(subscriber => {}),
  observe((notif, data) => console.log(notif + ": " + data)),
);
const subscription = connect(observableThatDoesNothing, scheduler);
subscription.dispose();
```

## API

### Interfaces

*Notification*

*NotifyNext*

*NotifyComplete*

*ObservableLike*

*ObservableResourceLike*

*ObserverLike*

*Operator*

*SubscriberLike*

### Abstract Classes

*DelegatingSubscriber*

### Static Functions

*`connect<T>(
  observable: ObservableLike<T>,
  scheduler: SchedulerLike,
): DisposableLike`*

*`observe<T>(observer: ObserverLike<T>): Operator<T, T>`*

*`Notifications.next: NotifyNext`*

*`Notifications.complete: NotifyComplete`*

*`Observable.create<T>(subscribe: (subscriber: SubscriberLike<T>) => void): ObservableLike<T>`*

*`Observable.lift(source: ObservableLike<any>,operator: Operator<any, any>,...operators: Array<Operator<any, any>>): ObservableLike<any>`*

*`ObservableResource.lift(source: ObservableResourceLike<any>, operator: Operator<any, any>, ...operators: Array<Operator<any, any>>): ObservableResourceLike<any>`*
