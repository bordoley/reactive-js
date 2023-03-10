[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / PrioritySchedulerLike

# Interface: PrioritySchedulerLike

[scheduling](../modules/scheduling.md).PrioritySchedulerLike

## Hierarchy

- [`SchedulerLike`](scheduling.SchedulerLike.md)

  ↳ **`PrioritySchedulerLike`**

## Table of contents

### Properties

- [[SchedulerLike\_inContinuation]](scheduling.PrioritySchedulerLike.md#[schedulerlike_incontinuation])
- [[SchedulerLike\_now]](scheduling.PrioritySchedulerLike.md#[schedulerlike_now])
- [[SchedulerLike\_shouldYield]](scheduling.PrioritySchedulerLike.md#[schedulerlike_shouldyield])

### Methods

- [[SchedulerLike\_requestYield]](scheduling.PrioritySchedulerLike.md#[schedulerlike_requestyield])
- [[SchedulerLike\_schedule]](scheduling.PrioritySchedulerLike.md#[schedulerlike_schedule])

## Properties

### [SchedulerLike\_inContinuation]

• `Readonly` **[SchedulerLike\_inContinuation]**: `boolean`

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_inContinuation]](scheduling.SchedulerLike.md#[schedulerlike_incontinuation])

___

### [SchedulerLike\_now]

• `Readonly` **[SchedulerLike\_now]**: `number`

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_now]](scheduling.SchedulerLike.md#[schedulerlike_now])

___

### [SchedulerLike\_shouldYield]

• `Readonly` **[SchedulerLike\_shouldYield]**: `boolean`

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_shouldYield]](scheduling.SchedulerLike.md#[schedulerlike_shouldyield])

## Methods

### [SchedulerLike\_requestYield]

▸ **[SchedulerLike_requestYield]**(): `void`

Request the scheduler to yield.

#### Returns

`void`

#### Inherited from

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_requestYield]](scheduling.SchedulerLike.md#[schedulerlike_requestyield])

___

### [SchedulerLike\_schedule]

▸ **[SchedulerLike_schedule]**(`continuation`, `options?`): [`DisposableLike`](util.DisposableLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `continuation` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`ContinuationContextLike`](scheduling.ContinuationContextLike.md)\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.priority?` | `number` |

#### Returns

[`DisposableLike`](util.DisposableLike.md)

#### Overrides

[SchedulerLike](scheduling.SchedulerLike.md).[[SchedulerLike_schedule]](scheduling.SchedulerLike.md#[schedulerlike_schedule])
