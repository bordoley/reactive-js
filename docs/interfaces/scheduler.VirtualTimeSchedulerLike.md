[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / VirtualTimeSchedulerLike

# Interface: VirtualTimeSchedulerLike

[scheduler](../modules/scheduler.md).VirtualTimeSchedulerLike

## Hierarchy

- [`Enumerator`](../classes/enumerator.Enumerator.md)<`void`\>

- [`SchedulerLike`](scheduler.SchedulerLike.md)

  ↳ **`VirtualTimeSchedulerLike`**

## Table of contents

### Properties

- [inContinuation](scheduler.VirtualTimeSchedulerLike.md#incontinuation)
- [isDisposed](scheduler.VirtualTimeSchedulerLike.md#isdisposed)
- [now](scheduler.VirtualTimeSchedulerLike.md#now)
- [shouldYield](scheduler.VirtualTimeSchedulerLike.md#shouldyield)

### Accessors

- [T](scheduler.VirtualTimeSchedulerLike.md#t)
- [current](scheduler.VirtualTimeSchedulerLike.md#current)
- [hasCurrent](scheduler.VirtualTimeSchedulerLike.md#hascurrent)
- [type](scheduler.VirtualTimeSchedulerLike.md#type)

### Methods

- [dispose](scheduler.VirtualTimeSchedulerLike.md#dispose)
- [move](scheduler.VirtualTimeSchedulerLike.md#move)
- [requestYield](scheduler.VirtualTimeSchedulerLike.md#requestyield)
- [schedule](scheduler.VirtualTimeSchedulerLike.md#schedule)

## Properties

### inContinuation

• `Readonly` **inContinuation**: `boolean`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[inContinuation](scheduler.SchedulerLike.md#incontinuation)

___

### isDisposed

• `Readonly` **isDisposed**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Overrides

[SchedulerLike](scheduler.SchedulerLike.md).[isDisposed](scheduler.SchedulerLike.md#isdisposed)

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

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Inherited from

Enumerator.T

___

### current

• `Abstract` `get` **current**(): `T`

#### Returns

`T`

#### Inherited from

Enumerator.current

___

### hasCurrent

• `Abstract` `get` **hasCurrent**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Enumerator.hasCurrent

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Inherited from

Enumerator.type

## Methods

### dispose

▸ **dispose**(`this`): `void`

Dispose the resource. Must be idempotent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`VirtualTimeSchedulerLike`](scheduler.VirtualTimeSchedulerLike.md) |

#### Returns

`void`

#### Overrides

[SchedulerLike](scheduler.SchedulerLike.md).[dispose](scheduler.SchedulerLike.md#dispose)

___

### move

▸ `Abstract` **move**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Enumerator](../classes/enumerator.Enumerator.md).[move](../classes/enumerator.Enumerator.md#move)

___

### requestYield

▸ **requestYield**(`this`): `void`

Request the scheduler to yield.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`VirtualTimeSchedulerLike`](scheduler.VirtualTimeSchedulerLike.md) |

#### Returns

`void`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[requestYield](scheduler.SchedulerLike.md#requestyield)

___

### schedule

▸ **schedule**(`this`, `continuation`, `options?`): `void`

Schedules a continuation to be executed on the scheduler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`VirtualTimeSchedulerLike`](scheduler.VirtualTimeSchedulerLike.md) | - |
| `continuation` | [`SchedulerContinuationLike`](scheduler.SchedulerContinuationLike.md) | The SchedulerContinuation to be executed. |
| `options?` | `Object` | - |
| `options.delay?` | `number` | - |

#### Returns

`void`

#### Inherited from

[SchedulerLike](scheduler.SchedulerLike.md).[schedule](scheduler.SchedulerLike.md#schedule)
