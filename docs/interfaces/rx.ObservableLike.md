[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ObservableLike

# Interface: ObservableLike<T\>

[rx](../modules/rx.md).ObservableLike

The source of notifications which can be consumed by an `ObserverLike` instance.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ContainerLike`](containers.ContainerLike.md)

  ↳ **`ObservableLike`**

  ↳↳ [`RunnableLike`](rx.RunnableLike.md)

  ↳↳ [`MulticastObservableLike`](rx.MulticastObservableLike.md)

  ↳↳ [`AsyncEnumerableLike`](streaming.AsyncEnumerableLike.md)

  ↳↳ [`FlowableLike`](streaming.FlowableLike.md)

## Table of contents

### Properties

- [[\_\_\_ContainerLike\_type]](rx.ObservableLike.md#[___containerlike_type])
- [[\_\_\_ObservableLike\_isEnumerable]](rx.ObservableLike.md#[___observablelike_isenumerable])
- [[\_\_\_ObservableLike\_isRunnable]](rx.ObservableLike.md#[___observablelike_isrunnable])

### Methods

- [[\_\_\_ObservableLike\_observe]](rx.ObservableLike.md#[___observablelike_observe])

## Properties

### [\_\_\_ContainerLike\_type]

• `Optional` `Readonly` **[\_\_\_ContainerLike\_type]**: [`ObservableLike`](rx.ObservableLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[[___ContainerLike_type]](containers.ContainerLike.md#[___containerlike_type])

___

### [\_\_\_ObservableLike\_isEnumerable]

• `Readonly` **[\_\_\_ObservableLike\_isEnumerable]**: `boolean`

Indicates if the `ObservableLike` supports interactive enumeration.

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: `boolean`

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

## Methods

### [\_\_\_ObservableLike\_observe]

▸ **[___ObservableLike_observe]**(`observer`): `void`

Subscribes the given `ObserverLike` to the `ObservableLike` source.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | [`ObserverLike`](rx.ObserverLike.md)<`T`\> | The observer. |

#### Returns

`void`
