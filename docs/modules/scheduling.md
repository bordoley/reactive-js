[Reactive-JS](../README.md) / scheduling

# Module: scheduling

## Table of contents

### Interfaces

- [ContinuationLike](../interfaces/scheduling.ContinuationLike.md)
- [DispatcherLike](../interfaces/scheduling.DispatcherLike.md)
- [PauseableLike](../interfaces/scheduling.PauseableLike.md)
- [PauseableSchedulerLike](../interfaces/scheduling.PauseableSchedulerLike.md)
- [PrioritySchedulerLike](../interfaces/scheduling.PrioritySchedulerLike.md)
- [SchedulerLike](../interfaces/scheduling.SchedulerLike.md)
- [VirtualTimeSchedulerLike](../interfaces/scheduling.VirtualTimeSchedulerLike.md)

### Type Aliases

- [PauseableState](scheduling.md#pauseablestate)

### Variables

- [PauseableState\_paused](scheduling.md#pauseablestate_paused)
- [PauseableState\_running](scheduling.md#pauseablestate_running)

## Type Aliases

### PauseableState

Ƭ **PauseableState**: typeof [`PauseableState_running`](scheduling.md#pauseablestate_running) \| typeof [`PauseableState_paused`](scheduling.md#pauseablestate_paused)

## Variables

### PauseableState\_paused

• `Const` **PauseableState\_paused**: unique `symbol`

___

### PauseableState\_running

• `Const` **PauseableState\_running**: unique `symbol`
