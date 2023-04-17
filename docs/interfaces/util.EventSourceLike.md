[Reactive-JS](../README.md) / [util](../modules/util.md) / EventSourceLike

# Interface: EventSourceLike<T\>

[util](../modules/util.md).EventSourceLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ReplayableLike`](util.ReplayableLike.md)<`T`\>

- [`ContainerLike`](containers.ContainerLike.md)

  ↳ **`EventSourceLike`**

  ↳↳ [`EventPublisherLike`](util.EventPublisherLike.md)

## Table of contents

### Properties

- [[\_\_\_ContainerLike\_type]](util.EventSourceLike.md#[___containerlike_type])

### Methods

- [[\_\_\_EventSourceLike\_addListener]](util.EventSourceLike.md#[___eventsourcelike_addlistener])

## Properties

### [\_\_\_ContainerLike\_type]

• `Optional` `Readonly` **[\_\_\_ContainerLike\_type]**: [`EventSourceLike`](util.EventSourceLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[[___ContainerLike_type]](containers.ContainerLike.md#[___containerlike_type])

## Methods

### [\_\_\_EventSourceLike\_addListener]

▸ **[___EventSourceLike_addListener]**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventListenerLike`](util.EventListenerLike.md)<`T`\> |

#### Returns

`void`
