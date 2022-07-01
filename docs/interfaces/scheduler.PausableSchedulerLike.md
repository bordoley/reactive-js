[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / PausableSchedulerLike

# Interface: PausableSchedulerLike

[scheduler](../modules/scheduler.md).PausableSchedulerLike

## Hierarchy

- [`SchedulerLike`](scheduler.SchedulerLike.md)

  ↳ **`PausableSchedulerLike`**

## Table of contents

### Properties

- [inContinuation](scheduler.PausableSchedulerLike.md#incontinuation)
- [now](scheduler.PausableSchedulerLike.md#now)
- [shouldYield](scheduler.PausableSchedulerLike.md#shouldyield)

### Accessors

- [error](scheduler.PausableSchedulerLike.md#error)
- [isDisposed](scheduler.PausableSchedulerLike.md#isdisposed)

### Methods

- [add](scheduler.PausableSchedulerLike.md#add)
- [dispose](scheduler.PausableSchedulerLike.md#dispose)
- [pause](scheduler.PausableSchedulerLike.md#pause)
- [requestYield](scheduler.PausableSchedulerLike.md#requestyield)
- [resume](scheduler.PausableSchedulerLike.md#resume)
- [schedule](scheduler.PausableSchedulerLike.md#schedule)

## Properties

### inContinuation

• `Readonly` **inContinuation**: `boolean`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[inContinuation](scheduler.SchedulerLike.md#incontinuation)

___

### now

• `Readonly` **now**: `number`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[now](scheduler.SchedulerLike.md#now)

___

### shouldYield

• `Readonly` **shouldYield**: `boolean`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[shouldYield](scheduler.SchedulerLike.md#shouldyield)

## Accessors

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

#### Inherited from

SchedulerLike.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Inherited from

SchedulerLike.isDisposed

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PausableSchedulerLike`](scheduler.PausableSchedulerLike.md) |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[add](scheduler.SchedulerLike.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`PausableSchedulerLike`](scheduler.PausableSchedulerLike.md) | - |
| `error?` | [`Error`](disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[dispose](scheduler.SchedulerLike.md#dispose)

___

### pause

▸ **pause**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PausableSchedulerLike`](scheduler.PausableSchedulerLike.md) |

#### Returns

`void`

___

### requestYield

▸ **requestYield**(`this`): `void`

Request the scheduler to yield.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PausableSchedulerLike`](scheduler.PausableSchedulerLike.md) |

#### Returns

`void`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[requestYield](scheduler.SchedulerLike.md#requestyield)

___

### resume

▸ **resume**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`PausableSchedulerLike`](scheduler.PausableSchedulerLike.md) |

#### Returns

`void`

___

### schedule

▸ **schedule**(`this`, `continuation`, `options?`): `void`

Schedules a continuation to be executed on the scheduler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`PausableSchedulerLike`](scheduler.PausableSchedulerLike.md) | - |
| `continuation` | [`SchedulerContinuationLike`](scheduler.SchedulerContinuationLike.md) | The SchedulerContinuation to be executed. |
| `options?` | `Object` | - |
| `options.delay?` | `number` | - |

#### Returns

`void`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[schedule](scheduler.SchedulerLike.md#schedule)
