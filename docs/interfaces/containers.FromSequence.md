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

### Constructor Methods

- [fromSequence](containers.FromSequence.md#fromsequence)

## Constructor Methods

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
