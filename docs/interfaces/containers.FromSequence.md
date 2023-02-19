[Reactive-JS](../README.md) / [containers](../modules/containers.md) / FromSequence

# Interface: FromSequence<C, O\>

[containers](../modules/containers.md).FromSequence

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`FromSequence`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.FromSequence.md#containerlike_type)

### Methods

- [fromSequence](containers.FromSequence.md#fromsequence)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Methods

### fromSequence

▸ **fromSequence**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`SequenceLike`](containers.SequenceLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`SequenceLike`](containers.SequenceLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>
