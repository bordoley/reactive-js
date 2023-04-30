[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ObservableContainerLike

# Interface: ObservableContainerLike<T\>

[rx](../modules/rx.md).ObservableContainerLike

The source of notifications which can be consumed by an `ObserverLike` instance.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](rx.ObservableLike.md)<`T`\>

- [`ContainerLike`](containers.ContainerLike.md)

  ↳ **`ObservableContainerLike`**

  ↳↳ [`RunnableLike`](rx.RunnableLike.md)

## Table of contents

### Properties

- [[\_\_\_ContainerLike\_T]](rx.ObservableContainerLike.md#[___containerlike_t])
- [[\_\_\_ContainerLike\_type]](rx.ObservableContainerLike.md#[___containerlike_type])
- [[\_\_\_ObservableLike\_isEnumerable]](rx.ObservableContainerLike.md#[___observablelike_isenumerable])
- [[\_\_\_ObservableLike\_isRunnable]](rx.ObservableContainerLike.md#[___observablelike_isrunnable])

### Methods

- [[\_\_\_ObservableLike\_observe]](rx.ObservableContainerLike.md#[___observablelike_observe])

## Properties

### [\_\_\_ContainerLike\_T]

• `Optional` `Readonly` **[\_\_\_ContainerLike\_T]**: `unknown`

#### Inherited from

[ContainerLike](containers.ContainerLike.md).[[___ContainerLike_T]](containers.ContainerLike.md#[___containerlike_t])

___

### [\_\_\_ContainerLike\_type]

• `Optional` `Readonly` **[\_\_\_ContainerLike\_type]**: [`ObservableContainerLike`](rx.ObservableContainerLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[[___ContainerLike_type]](containers.ContainerLike.md#[___containerlike_type])

___

### [\_\_\_ObservableLike\_isEnumerable]

• `Readonly` **[\_\_\_ObservableLike\_isEnumerable]**: `boolean`

Indicates if the `ObservableLike` supports interactive enumeration.

#### Inherited from

[ObservableLike](rx.ObservableLike.md).[[___ObservableLike_isEnumerable]](rx.ObservableLike.md#[___observablelike_isenumerable])

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: `boolean`

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Inherited from

[ObservableLike](rx.ObservableLike.md).[[___ObservableLike_isRunnable]](rx.ObservableLike.md#[___observablelike_isrunnable])

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

#### Inherited from

[ObservableLike](rx.ObservableLike.md).[[___ObservableLike_observe]](rx.ObservableLike.md#[___observablelike_observe])
