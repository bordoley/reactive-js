[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Buffer

# Interface: Buffer<C, O\>

[containers](../modules/containers.md).Buffer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Buffer`**

## Table of contents

### Operator Properties

- [buffer](containers.Buffer.md#buffer)

### Other Properties

- [ContainerLike\_type](containers.Buffer.md#containerlike_type)

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: `O` & { `maxBufferSize?`: `number`  }) => [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly `T`[]\>

Returns a ContainerLike which buffers items produced by the source until either the
number of items reaches the specified maximum buffer size.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` & { `maxBufferSize?`: `number`  } |

##### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly `T`[]\>

___

## Other Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)
