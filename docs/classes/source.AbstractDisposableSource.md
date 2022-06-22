[Reactive-JS](../README.md) / [source](../modules/source.md) / AbstractDisposableSource

# Class: AbstractDisposableSource<T, TSink\>

[source](../modules/source.md).AbstractDisposableSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`T`\> |

## Hierarchy

- [`AbstractDisposableContainer`](container.AbstractDisposableContainer.md)

  ↳ **`AbstractDisposableSource`**

## Implements

- [`ContainerLike`](../interfaces/container.ContainerLike.md)

## Table of contents

### Constructors

- [constructor](source.AbstractDisposableSource.md#constructor)

### Accessors

- [T](source.AbstractDisposableSource.md#t)
- [sinkType](source.AbstractDisposableSource.md#sinktype)
- [type](source.AbstractDisposableSource.md#type)

### Methods

- [sink](source.AbstractDisposableSource.md#sink)

## Constructors

### constructor

• **new AbstractDisposableSource**<`T`, `TSink`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`T`, `TSink`\> |

#### Inherited from

[AbstractDisposableContainer](container.AbstractDisposableContainer.md).[constructor](container.AbstractDisposableContainer.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[ContainerLike](../interfaces/container.ContainerLike.md).[T](../interfaces/container.ContainerLike.md#t)

#### Inherited from

AbstractDisposableContainer.T

___

### sinkType

• `get` **sinkType**(): `TSink`

#### Returns

`TSink`

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[ContainerLike](../interfaces/container.ContainerLike.md).[type](../interfaces/container.ContainerLike.md#type)

#### Inherited from

AbstractDisposableContainer.type

## Methods

### sink

▸ `Abstract` **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbstractDisposableSource`](source.AbstractDisposableSource.md)<`T`, `TSink`\> |
| `sink` | `TSink` |

#### Returns

`void`
