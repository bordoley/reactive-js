# @reactive-js/rx-core

Core interfaces for reactive programming in reactive-js.

## Usage

```typescript
import { connect, observe, Observable } from "@reactive-js/rx-core";
import { NodeScheduler } from "@reactive-js/node-scheduler";

const scheduler = NodeScheduler.create(1);
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

*connect*

*observe*

*Notifications.next: NotifyNext*

*Notifications.complete: NotifyComplete*

*Observable.create*

*Observable.lift*

*ObservableResource.lift*
