[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / MergeWith

# Interface: MergeWith<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).MergeWith

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Properties

- [mergeWith](core.ReactiveContainer.MergeWith.md#mergewith)

## Operator Properties

### mergeWith

• **mergeWith**: <T\>(`snd`: [`Of`](../modules/core.Container.md#of)<`C`, `T`\>, ...`tail`: readonly [`Of`](../modules/core.Container.md#of)<`C`, `T`\>[]) => [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`Of`](../modules/core.Container.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/core.Container.md#of)<`C`, `T`\>[] |

##### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>
