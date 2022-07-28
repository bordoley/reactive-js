[Reactive-JS](../README.md) / scheduling/SchedulerLike

# Module: scheduling/SchedulerLike

## Table of contents

### Functions

- [\_\_yield](scheduling_SchedulerLike.md#__yield)
- [requestYield](scheduling_SchedulerLike.md#requestyield)
- [schedule](scheduling_SchedulerLike.md#schedule)
- [shouldYield](scheduling_SchedulerLike.md#shouldyield)
- [toPausableScheduler](scheduling_SchedulerLike.md#topausablescheduler)
- [toPriorityScheduler](scheduling_SchedulerLike.md#topriorityscheduler)

## Functions

### \_\_yield

▸ **__yield**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

`void`

___

### requestYield

▸ **requestYield**(`scheduler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | `Object` |
| `scheduler.[SchedulerLike_requestYield]` | () => `void` |

#### Returns

`void`

___

### schedule

▸ **schedule**(`f`, `options?`): [`Function1`](functions.md#function1)<[`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md), [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect`](functions.md#sideeffect) \| [`ContinuationLike`](../interfaces/util.ContinuationLike.md) |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md), [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

___

### shouldYield

▸ **shouldYield**(`scheduler`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | `Object` |
| `scheduler.[SchedulerLike_shouldYield]` | `boolean` |

#### Returns

`boolean`

___

### toPausableScheduler

▸ **toPausableScheduler**(`a`): [`PauseableSchedulerLike`](../interfaces/scheduling.PauseableSchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

[`PauseableSchedulerLike`](../interfaces/scheduling.PauseableSchedulerLike.md)

___

### toPriorityScheduler

▸ **toPriorityScheduler**(`a`): [`PrioritySchedulerLike`](../interfaces/scheduling.PrioritySchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

[`PrioritySchedulerLike`](../interfaces/scheduling.PrioritySchedulerLike.md)
