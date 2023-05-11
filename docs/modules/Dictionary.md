[Reactive-JS](../README.md) / Dictionary

# Module: Dictionary

## Table of contents

### Interfaces

- [Signature](../interfaces/Dictionary.Signature.md)

### Type Aliases

- [TKeyBase](Dictionary.md#tkeybase)
- [Type](Dictionary.md#type)

### Transform Functions

- [entries](Dictionary.md#entries)
- [keys](Dictionary.md#keys)
- [values](Dictionary.md#values)

## Type Aliases

### TKeyBase

Ƭ **TKeyBase**: `NonNullable`<[`Type`](Dictionary.md#type)[typeof [`KeyedContainer_TKey`](types.md#keyedcontainer_tkey)]\>

___

### Type

Ƭ **Type**<`TKey`\>: [`DictionaryContainer`](../interfaces/types.DictionaryContainer.md)<`TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | `unknown` |

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `unknown`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `unknown`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TKey`\>\>

___

### values

▸ **values**<`T`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`any`, `T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`any`, `T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>
