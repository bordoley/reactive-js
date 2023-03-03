[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ObservableLike

# Interface: ObservableLike<T\>

[rx](../modules/rx.md).ObservableLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ContainerLike`](containers.ContainerLike.md)

  ↳ **`ObservableLike`**

  ↳↳ [`RunnableLike`](rx.RunnableLike.md)

  ↳↳ [`MulticastObservableLike`](rx.MulticastObservableLike.md)

  ↳↳ [`FlowableLike`](streaming.FlowableLike.md)

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

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: `boolean`

## Methods

### [ObservableLike\_observe]

▸ **[ObservableLike_observe]**(`observer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`ObserverLike`](rx.ObserverLike.md)<`T`\> |

#### Returns

`void`
