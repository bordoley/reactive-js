[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / ForkConcat

# Interface: ForkConcat<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).ForkConcat

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Operator Methods

- [forkConcat](core.Container.ForkConcat.md#forkconcat)

## Operator Methods

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TIn`, `TOut`\>

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
