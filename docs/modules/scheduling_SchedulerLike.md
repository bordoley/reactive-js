[Reactive-JS](../README.md) / scheduling/SchedulerLike

# Module: scheduling/SchedulerLike

## Table of contents

### Interfaces

- [SchedulerLike](../interfaces/scheduling_SchedulerLike.SchedulerLike.md)

### Type Aliases

- [SchedulerOptions](scheduling_SchedulerLike.md#scheduleroptions)

### Variables

- [SchedulerLike\_now](scheduling_SchedulerLike.md#schedulerlike_now)
- [SchedulerLike\_requestYield](scheduling_SchedulerLike.md#schedulerlike_requestyield)
- [SchedulerLike\_schedule](scheduling_SchedulerLike.md#schedulerlike_schedule)
- [SchedulerLike\_shouldYield](scheduling_SchedulerLike.md#schedulerlike_shouldyield)

### Functions

- [\_\_yield](scheduling_SchedulerLike.md#__yield)
- [create](scheduling_SchedulerLike.md#create)
- [getCurrentTime](scheduling_SchedulerLike.md#getcurrenttime)
- [isInContinuation](scheduling_SchedulerLike.md#isincontinuation)
- [requestYield](scheduling_SchedulerLike.md#requestyield)
- [schedule](scheduling_SchedulerLike.md#schedule)
- [shouldYield](scheduling_SchedulerLike.md#shouldyield)

## Type Aliases

### SchedulerOptions

Ƭ **SchedulerOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delay?` | `number` |

## Variables

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

### create

▸ **create**(`options?`): [`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.yieldInterval?` | `number` |

#### Returns

[`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md)

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

▸ **schedule**(`f`, `options?`): [`Function1`](util_functions.md#function1)<[`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md), [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect`](util_functions.md#sideeffect) \| [`ContinuationLike`](../interfaces/scheduling_ContinuationLike.ContinuationLike.md) |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](util_functions.md#function1)<[`SchedulerLike`](../interfaces/scheduling_SchedulerLike.SchedulerLike.md), [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md)\>

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
