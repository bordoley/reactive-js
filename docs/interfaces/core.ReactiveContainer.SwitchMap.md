[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / SwitchMap

# Interface: SwitchMap<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).SwitchMap

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Properties

- [switchMap](core.ReactiveContainer.SwitchMap.md#switchmap)

## Operator Properties

### switchMap

• **switchMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/core.Container.md#of)<`C`, `TB`\>\>) => [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/core.Container.md#of)<`C`, `TB`\>\> |

##### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>
