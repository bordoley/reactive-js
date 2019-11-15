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

* `get now: number`

  Returns the SchedulerLike's current time in ms. Does not necessarily correspond to any absolute time reference.
  
* `schedule(
    continuation: SchedulerContinuation,
    delay?: number,
  ): DisposableLike;`

  Schedules the given continuation to be executed asynchronously by the SchedulerLike with an optional delay in ms. 
  The returned DisposableLike may be used to cancel the request.

*SchedulerResourceLike*:

*SchedulerContinuation*: 

A function with the shape `(shouldYield: () => boolean): SchedulerContinuationResult` to be scheduled on a SchedulerLike. 
The SchedulerContinuation specification supports cooperative multi-tasking via the provided shouldYield function. 
SchedulerContinuation instance should periodically check for yield requests and return a SchedulerContinuationResult 
if they have additional work to complete.

*SchedulerContinuationResult*: 

The return type of a SchedulerContinuation. A SchedulerContinuation may either return another SchedulerContinuation to be executed
as soon as possible by the SchedulerLike, or a `[SchedulerContinuation, number]` tuple where the second value is a 
non-negative delay in ms or void if the SchedulerContinuation has completed it's work.

