[Reactive-JS](../README.md) / [rx](../modules/rx.md) / [Reactive](../modules/rx.Reactive.md) / Retry

# Interface: Retry<C\>

[rx](../modules/rx.md).[Reactive](../modules/rx.Reactive.md).Retry

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container-1.md) |

## Table of contents

### Operator Methods

- [retry](rx.Reactive.Retry.md#retry)

## Operator Methods

### retry

▸ **retry**<`T`\>(): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

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

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
