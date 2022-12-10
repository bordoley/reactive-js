[Reactive-JS](../README.md) / scheduling/SchedulerLike

# Module: scheduling/SchedulerLike

## Table of contents

### Functions

- [createHostScheduler](scheduling_SchedulerLike.md#createhostscheduler)
- [getCurrentTime](scheduling_SchedulerLike.md#getcurrenttime)
- [isInContinuation](scheduling_SchedulerLike.md#isincontinuation)
- [requestYield](scheduling_SchedulerLike.md#requestyield)
- [schedule](scheduling_SchedulerLike.md#schedule)
- [shouldYield](scheduling_SchedulerLike.md#shouldyield)
- [toPausableScheduler](scheduling_SchedulerLike.md#topausablescheduler)
- [toPriorityScheduler](scheduling_SchedulerLike.md#topriorityscheduler)

## Functions

### createHostScheduler

▸ **createHostScheduler**(`options?`): [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.yieldInterval?` | `number` |

#### Returns

[`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)

___

### getCurrentTime

▸ **getCurrentTime**(`scheduler`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | `Object` |
| `scheduler.[SchedulerLike_now]` | `number` |

#### Returns

`number`

___

### isInContinuation

▸ **isInContinuation**(`scheduler`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | `Object` |
| `scheduler.[SchedulerLike_inContinuation]` | `boolean` |

#### Returns

`boolean`

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
| `f` | [`ContinuationLike`](../interfaces/scheduling.ContinuationLike.md) \| [`SideEffect`](functions.md#sideeffect) |
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
