[Reactive-JS](../README.md) / [asyncEnumerable](../modules/asyncEnumerable.md) / AsyncEnumerableLike

# Interface: AsyncEnumerableLike<T\>

[asyncEnumerable](../modules/asyncEnumerable.md).AsyncEnumerableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<`void`, [`T`](asyncEnumerable.AsyncEnumerableLike.md#t), [`AsyncEnumeratorLike`](asyncEnumerable.AsyncEnumeratorLike.md)<[`T`](asyncEnumerable.AsyncEnumerableLike.md#t)\>\>

- [`ContainerLike`](container.ContainerLike.md)

  ↳ **`AsyncEnumerableLike`**

## Table of contents

### Properties

- [T](asyncEnumerable.AsyncEnumerableLike.md#t)
- [type](asyncEnumerable.AsyncEnumerableLike.md#type)

### Methods

- [stream](asyncEnumerable.AsyncEnumerableLike.md#stream)

## Properties

### T

• **T**: `unknown`

#### Overrides

[ContainerLike](container.ContainerLike.md).[T](container.ContainerLike.md#t)

___

### type

• `Readonly` **type**: [`AsyncEnumerableLike`](asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>

#### Overrides

[ContainerLike](container.ContainerLike.md).[type](container.ContainerLike.md#type)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): [`AsyncEnumeratorLike`](asyncEnumerable.AsyncEnumeratorLike.md)<[`T`](asyncEnumerable.AsyncEnumerableLike.md#t)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<`void`, [`T`](asyncEnumerable.AsyncEnumerableLike.md#t), [`AsyncEnumeratorLike`](asyncEnumerable.AsyncEnumeratorLike.md)<[`T`](asyncEnumerable.AsyncEnumerableLike.md#t)\>\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`AsyncEnumeratorLike`](asyncEnumerable.AsyncEnumeratorLike.md)<[`T`](asyncEnumerable.AsyncEnumerableLike.md#t)\>

#### Inherited from

[StreamableLike](streamable.StreamableLike.md).[stream](streamable.StreamableLike.md#stream)
