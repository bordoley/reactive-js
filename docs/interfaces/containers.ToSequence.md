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

### Transform Methods

- [toSequence](containers.ToSequence.md#tosequence)

## Transform Methods

### toSequence

▸ **toSequence**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`SequenceLike`](containers.SequenceLike.md)<`T`\>\>

Converts the ContainerLike to a `SequenceLike`.

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
