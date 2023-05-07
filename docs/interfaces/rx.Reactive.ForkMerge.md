[Reactive-JS](../README.md) / [rx](../modules/rx.md) / [Reactive](../modules/rx.Reactive.md) / ForkMerge

# Interface: ForkMerge<C\>

[rx](../modules/rx.md).[Reactive](../modules/rx.Reactive.md).ForkMerge

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](rx.ObservableContainer.md) |

## Table of contents

### Operator Methods

- [forkMerge](rx.Reactive.ForkMerge.md#forkmerge)

## Operator Methods

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TIn`, `TOut`\>

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
