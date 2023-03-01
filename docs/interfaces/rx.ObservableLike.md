[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ObservableLike

# Interface: ObservableLike<T\>

[rx](../modules/rx.md).ObservableLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`StatefulContainerLike`](containers.StatefulContainerLike.md)

  ↳ **`ObservableLike`**

  ↳↳ [`RunnableLike`](rx.RunnableLike.md)

  ↳↳ [`MulticastObservableLike`](rx.MulticastObservableLike.md)

## Table of contents

### Properties

- [[ContainerLike\_type]](rx.ObservableLike.md#[containerlike_type])
- [[ObservableLike\_isEnumerable]](rx.ObservableLike.md#[observablelike_isenumerable])
- [[ObservableLike\_isRunnable]](rx.ObservableLike.md#[observablelike_isrunnable])
- [[StatefulContainerLike\_state]](rx.ObservableLike.md#[statefulcontainerlike_state])
- [[StatefulContainerLike\_variance]](rx.ObservableLike.md#[statefulcontainerlike_variance])

### Methods

- [[ObservableLike\_observe]](rx.ObservableLike.md#[observablelike_observe])

## Properties

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`ObservableLike`](rx.ObservableLike.md)<`unknown`\>

#### Overrides

StatefulContainerLike.\_\_@ContainerLike\_type@23116

___

### [ObservableLike\_isEnumerable]

• `Readonly` **[ObservableLike\_isEnumerable]**: `boolean`

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: `boolean`

___

### [StatefulContainerLike\_state]

• `Optional` `Readonly` **[StatefulContainerLike\_state]**: [`ObserverLike`](rx.ObserverLike.md)<`unknown`\>

#### Overrides

[StatefulContainerLike](containers.StatefulContainerLike.md).[[StatefulContainerLike_state]](containers.StatefulContainerLike.md#[statefulcontainerlike_state])

___

### [StatefulContainerLike\_variance]

• `Optional` `Readonly` **[StatefulContainerLike\_variance]**: ``"reactive"``

#### Overrides

[StatefulContainerLike](containers.StatefulContainerLike.md).[[StatefulContainerLike_variance]](containers.StatefulContainerLike.md#[statefulcontainerlike_variance])

## Methods

### [ObservableLike\_observe]

▸ **[ObservableLike_observe]**(`sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`ObserverLike`](rx.ObserverLike.md)<`T`\> |

#### Returns

`void`
