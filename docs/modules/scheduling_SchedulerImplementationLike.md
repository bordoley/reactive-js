[Reactive-JS](../README.md) / scheduling/SchedulerImplementationLike

# Module: scheduling/SchedulerImplementationLike

## Table of contents

### Interfaces

- [SchedulerImplementationLike](../interfaces/scheduling_SchedulerImplementationLike.SchedulerImplementationLike.md)

### Functions

- [runContinuation](scheduling_SchedulerImplementationLike.md#runcontinuation)

## Functions

### runContinuation

▸ **runContinuation**<`TScheduler`\>(`continuation`): [`Function1`](util_functions.md#function1)<`TScheduler`, `TScheduler`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TScheduler` | extends [`SchedulerImplementationLike`](../interfaces/scheduling_SchedulerImplementationLike.SchedulerImplementationLike.md)<`TScheduler`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `continuation` | [`ContinuationLike`](../interfaces/scheduling_ContinuationLike.ContinuationLike.md) |

#### Returns

[`Function1`](util_functions.md#function1)<`TScheduler`, `TScheduler`\>
