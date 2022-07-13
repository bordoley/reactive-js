[Reactive-JS](../README.md) / scheduling/SchedulerLike

# Module: scheduling/SchedulerLike

## Table of contents

### Interfaces

- [PrioritySchedulerLike](../interfaces/scheduling_SchedulerLike.PrioritySchedulerLike.md)
- [SchedulerLike](../interfaces/scheduling_SchedulerLike.SchedulerLike.md)
- [VirtualTimeSchedulerLike](../interfaces/scheduling_SchedulerLike.VirtualTimeSchedulerLike.md)

### Type Aliases

- [PrioritySchedulerOptions](scheduling_SchedulerLike.md#priorityscheduleroptions)
- [SchedulerOptions](scheduling_SchedulerLike.md#scheduleroptions)

### Variables

- [SchedulerLike\_inContinuation](scheduling_SchedulerLike.md#schedulerlike_incontinuation)
- [SchedulerLike\_now](scheduling_SchedulerLike.md#schedulerlike_now)
- [SchedulerLike\_requestYield](scheduling_SchedulerLike.md#schedulerlike_requestyield)
- [SchedulerLike\_schedule](scheduling_SchedulerLike.md#schedulerlike_schedule)
- [SchedulerLike\_shouldYield](scheduling_SchedulerLike.md#schedulerlike_shouldyield)

### Functions

- [\_\_yield](scheduling_SchedulerLike.md#__yield)
- [getCurrentTime](scheduling_SchedulerLike.md#getcurrenttime)
- [isInContinuation](scheduling_SchedulerLike.md#isincontinuation)
- [requestYield](scheduling_SchedulerLike.md#requestyield)
- [schedule](scheduling_SchedulerLike.md#schedule)
- [shouldYield](scheduling_SchedulerLike.md#shouldyield)

## Type Aliases

### PrioritySchedulerOptions

Ƭ **PrioritySchedulerOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delay?` | `number` |
| `priority` | `number` |

___

### SchedulerOptions

Ƭ **SchedulerOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delay?` | `number` |

## Variables

### SchedulerLike\_inContinuation

• `Const` **SchedulerLike\_inContinuation**: unique `symbol`

___

### SchedulerLike\_now

• `Const` **SchedulerLike\_now**: unique `symbol`

___

### SchedulerLike\_requestYield

• `Const` **SchedulerLike\_requestYield**: unique `symbol`

___

### SchedulerLike\_schedule

• `Const` **SchedulerLike\_schedule**: unique `symbol`

___

### SchedulerLike\_shouldYield

• `Const` **SchedulerLike\_shouldYield**: unique `symbol`

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

▸ **schedule**(`f`, `options?`): [`Function1`](util_functions.md#function1)<[`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md)<[`SchedulerOptions`](scheduling_SchedulerLike.md#scheduleroptions)\>, [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect`](util_functions.md#sideeffect) \| [`ContinuationLike`](../interfaces/scheduling_ContinuationLike.ContinuationLike.md) |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](util_functions.md#function1)<[`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md)<[`SchedulerOptions`](scheduling_SchedulerLike.md#scheduleroptions)\>, [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md)\>

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
