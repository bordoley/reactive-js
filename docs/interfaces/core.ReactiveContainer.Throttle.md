[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / Throttle

# Interface: Throttle<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).Throttle

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Methods

- [throttle](core.ReactiveContainer.Throttle.md#throttle)

## Operator Methods

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](../modules/functions.md#function1)<`T`, [`Of`](../modules/core.Container.md#of)<`C`, `unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns an `ObservableLike` which emits a value from the source,
then ignores subsequent source values for `duration` milliseconds.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Time to wait before emitting another value after emitting the last value, measured in milliseconds. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>
