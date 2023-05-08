[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / Retry

# Interface: Retry<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).Retry

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Methods

- [retry](core.ReactiveContainer.Retry.md#retry)

## Operator Methods

### retry

▸ **retry**<`T`\>(): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, resubscrbing
if the source completes with an error which satisfies the predicate function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](../modules/functions.md#function2)<`number`, `unknown`, `boolean`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>
