[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / SchedulerLike

# Interface: SchedulerLike

[scheduling](../modules/scheduling.md).SchedulerLike

## Hierarchy

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`SchedulerLike`**

  ↳↳ [`PauseableSchedulerLike`](scheduling.PauseableSchedulerLike.md)

  ↳↳ [`PrioritySchedulerLike`](scheduling.PrioritySchedulerLike.md)

  ↳↳ [`VirtualTimeSchedulerLike`](scheduling.VirtualTimeSchedulerLike.md)

## Table of contents

### Properties

- [[SchedulerLike\_inContinuation]](scheduling.SchedulerLike.md#[schedulerlike_incontinuation])
- [[SchedulerLike\_now]](scheduling.SchedulerLike.md#[schedulerlike_now])
- [[SchedulerLike\_shouldYield]](scheduling.SchedulerLike.md#[schedulerlike_shouldyield])

### Methods

- [[SchedulerLike\_requestYield]](scheduling.SchedulerLike.md#[schedulerlike_requestyield])
- [[SchedulerLike\_schedule]](scheduling.SchedulerLike.md#[schedulerlike_schedule])

## Properties

### [SchedulerLike\_inContinuation]

• `Readonly` **[SchedulerLike\_inContinuation]**: `boolean`

___

### [SchedulerLike\_now]

• `Readonly` **[SchedulerLike\_now]**: `number`

___

### [SchedulerLike\_shouldYield]

• `Readonly` **[SchedulerLike\_shouldYield]**: `boolean`

## Methods

### [SchedulerLike\_requestYield]

▸ **[SchedulerLike_requestYield]**(): `void`

Request the scheduler to yield.

#### Returns

`void`

___

### [SchedulerLike\_schedule]

▸ **[SchedulerLike_schedule]**(`continuation`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `continuation` | [`ContinuationLike`](scheduling.ContinuationLike.md) |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

`void`
