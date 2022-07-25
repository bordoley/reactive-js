[Reactive-JS](../README.md) / scheduling/SchedulerLike

# Module: scheduling/SchedulerLike

## Table of contents

### Functions

- [\_\_yield](scheduling_SchedulerLike.md#__yield)
- [create](scheduling_SchedulerLike.md#create)
- [getCurrentTime](scheduling_SchedulerLike.md#getcurrenttime)
- [isInContinuation](scheduling_SchedulerLike.md#isincontinuation)
- [requestYield](scheduling_SchedulerLike.md#requestyield)
- [schedule](scheduling_SchedulerLike.md#schedule)
- [shouldYield](scheduling_SchedulerLike.md#shouldyield)

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

### create

▸ **create**(`options?`): [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md)

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
