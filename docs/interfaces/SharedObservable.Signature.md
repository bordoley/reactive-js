[Reactive-JS](../README.md) / [SharedObservable](../modules/SharedObservable.md) / Signature

# Interface: Signature

[SharedObservable](../modules/SharedObservable.md).Signature

## Table of contents

### Methods

- [compute](SharedObservable.Signature.md#compute)
- [never](SharedObservable.Signature.md#never)

## Methods

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>

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

[`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>

___

### never

▸ **never**<`T`\>(): [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>
