[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / ScanMany

# Interface: ScanMany<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).ScanMany

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Properties

- [scanMany](core.ReactiveContainer.ScanMany.md#scanmany)

## Operator Properties

### scanMany

• **scanMany**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/core.Container.md#of)<`C`, `TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/core.Container.md#of)<`C`, `TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TAcc`\>
