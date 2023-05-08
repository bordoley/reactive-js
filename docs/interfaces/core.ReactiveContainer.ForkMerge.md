[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / ForkMerge

# Interface: ForkMerge<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).ForkMerge

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Methods

- [forkMerge](core.ReactiveContainer.ForkMerge.md#forkmerge)

## Operator Methods

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/core.Container.md#operator)<`C`, `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/core.Container.md#operator)<`C`, `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/core.Container.md#operator)<`C`, `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TIn`, `TOut`\>
