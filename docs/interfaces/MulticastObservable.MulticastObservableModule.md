[Reactive-JS](../README.md) / [MulticastObservable](../modules/MulticastObservable.md) / MulticastObservableModule

# Interface: MulticastObservableModule

[MulticastObservable](../modules/MulticastObservable.md).MulticastObservableModule

## Hierarchy

- [`HigherOrderObservableModule`](types.HigherOrderObservableModule.md)<[`Type`](../modules/MulticastObservable.md#type), [`Type`](../modules/DeferredObservable.md#type)\>

  ↳ **`MulticastObservableModule`**

## Table of contents

### Constructor Methods

- [compute](MulticastObservable.MulticastObservableModule.md#compute)

## Constructor Methods

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.mode?` | ``"batched"`` \| ``"combine-latest"`` |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>
