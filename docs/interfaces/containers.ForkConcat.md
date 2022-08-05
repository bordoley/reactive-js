[Reactive-JS](../README.md) / [containers](../modules/containers.md) / ForkConcat

# Interface: ForkConcat<C\>

[containers](../modules/containers.md).ForkConcat

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Table of contents

### Methods

- [forkConcat](containers.ForkConcat.md#forkconcat)

## Methods

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, ...`tail`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TIn`, `TOut`\> |
| `snd` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TIn`, `TOut`\> |
| `...tail` | readonly [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TIn`, `TOut`\>[] |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TIn`, `TOut`\>
