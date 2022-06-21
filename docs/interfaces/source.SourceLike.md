[Reactive-JS](../README.md) / [source](../modules/source.md) / SourceLike

# Interface: SourceLike

[source](../modules/source.md).SourceLike

## Hierarchy

- [`ContainerLike`](container.ContainerLike.md)

  ↳ **`SourceLike`**

  ↳↳ [`ObservableLike`](observable.ObservableLike.md)

  ↳↳ [`RunnableLike`](runnable.RunnableLike.md)

## Implemented by

- [`AbstractSource`](../classes/source.AbstractSource.md)

## Table of contents

### Properties

- [T](source.SourceLike.md#t)
- [sinkType](source.SourceLike.md#sinktype)
- [type](source.SourceLike.md#type)

### Methods

- [sink](source.SourceLike.md#sink)

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[ContainerLike](container.ContainerLike.md).[T](container.ContainerLike.md#t)

___

### sinkType

• `Readonly` **sinkType**: [`SinkLike`](source.SinkLike.md)<`unknown`\>

___

### type

• `Optional` `Readonly` **type**: `unknown`

#### Inherited from

[ContainerLike](container.ContainerLike.md).[type](container.ContainerLike.md#type)

## Methods

### sink

▸ **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `sink` | [`SinkLike`](source.SinkLike.md)<`unknown`\> |

#### Returns

`void`
