[Reactive-JS](../README.md) / [containers](../modules/containers.md) / ToSequence

# Interface: ToSequence<C, O\>

[containers](../modules/containers.md).ToSequence

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ToSequence`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.ToSequence.md#containerlike_type)

### Converter Methods

- [toSequence](containers.ToSequence.md#tosequence)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Converter Methods

### toSequence

▸ **toSequence**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`SequenceLike`](containers.SequenceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`SequenceLike`](containers.SequenceLike.md)<`T`\>\>
