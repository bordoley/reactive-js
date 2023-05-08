[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / Merge

# Interface: Merge<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).Merge

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Constructor Methods

- [merge](core.ReactiveContainer.Merge.md#merge)

## Constructor Methods

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`Of`](../modules/core.Container.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Of`](../modules/core.Container.md#of)<`C`, `T`\> |
| `snd` | [`Of`](../modules/core.Container.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/core.Container.md#of)<`C`, `T`\>[] |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, `T`\>
