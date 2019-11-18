# @reactive-js/scheduler

Abstract API for cooperative scheduling.

## Usage

```typescript
import { SchedulerLike, SchedulerContinuation, SchedulerContinuationResult } from "@reactive-js/scheduler";
```

## API

### Interfaces

*SchedulerLike*:

Represents a cooperative scheduler.

* `get inScheduledContinuation: boolean`

* `get now: number`

  Returns the SchedulerLike's current time in ms. Does not necessarily correspond to any absolute time reference.

* `schedule(continuation: SchedulerContinuation,delay?: number, priority?: number): DisposableLike;`

  Schedules the given continuation to be executed asynchronously by the SchedulerLike with an optional delay in ms and optional priority. The returned DisposableLike may be used to cancel the request.

*SchedulerResourceLike*:

*SchedulerContinuation*:

A function with the shape `(shouldYield: () => boolean): SchedulerContinuationResult | void` to be scheduled on a SchedulerLike.
The SchedulerContinuation specification supports cooperative multi-tasking via the provided shouldYield function. SchedulerContinuation instance should periodically check for yield requests and return a SchedulerContinuationResult if they have additional work to complete.

*SchedulerContinuationResult*:

An object with the shape
```
{
  readonly continuation: SchedulerContinuation;
  readonly delay?: number;
  readonly priority?: number;
};
```
that can be returned from a SchedulerContinuation to schedule addition work to be performed on the scheduler after a yield request from the scheduler.

