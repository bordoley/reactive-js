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

  ↳↳ [`HotObservableLike`](rx.HotObservableLike.md)

## Table of contents

### Properties

- [[ContainerLike\_type]](rx.ObservableLike.md#[containerlike_type])
- [[ObservableLike\_isEnumerable]](rx.ObservableLike.md#[observablelike_isenumerable])
- [[ObservableLike\_isRunnable]](rx.ObservableLike.md#[observablelike_isrunnable])

### Methods

- [[ObservableLike\_observe]](rx.ObservableLike.md#[observablelike_observe])

## Properties

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`ObservableLike`](rx.ObservableLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[[ContainerLike_type]](containers.ContainerLike.md#[containerlike_type])

___

### [ObservableLike\_isEnumerable]

• `Readonly` **[ObservableLike\_isEnumerable]**: `boolean`

Indicates if the `ObservableLike` supports interactive enumeration.

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: `boolean`

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

## Methods

### [ObservableLike\_observe]

▸ **[ObservableLike_observe]**(`observer`): `void`

Subscribes the given `ObserverLike` to the `ObservableLike` source.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | [`ObserverLike`](rx.ObserverLike.md)<`T`\> | The observer. |

#### Returns

`void`
