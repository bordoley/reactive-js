[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / Timeout

# Interface: Timeout<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).Timeout

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Methods

- [timeout](core.ReactiveContainer.Timeout.md#timeout)

## Operator Methods

### timeout

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns an `ObservableLike` that completes with an error if the source
does not emit a value in given time span.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Time in ms within which the source must emit values. |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`Of`](../modules/core.Container.md#of)<`C`, `unknown`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>
