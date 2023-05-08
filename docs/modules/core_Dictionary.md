[Reactive-JS](../README.md) / core/Dictionary

# Module: core/Dictionary

## Table of contents

### Constructor Functions

- [empty](core_Dictionary.md#empty)

### Transform Functions

- [entries](core_Dictionary.md#entries)
- [keys](core_Dictionary.md#keys)
- [values](core_Dictionary.md#values)

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(): [`DictionaryLike`](../interfaces/core.DictionaryLike.md)<`TKey`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`DictionaryLike`](../interfaces/core.DictionaryLike.md)<`TKey`, `T`\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/core.DictionaryLike.md)<`TKey`, `T`\>, [`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/core.DictionaryLike.md)<`TKey`, `T`\>, [`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<[`TKey`, `T`]\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/core.DictionaryLike.md)<`TKey`, `unknown`\>, [`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/core.DictionaryLike.md)<`TKey`, `unknown`\>, [`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<`TKey`\>\>

___

### values

▸ **values**<`T`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/core.DictionaryLike.md)<`any`, `T`\>, [`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/core.DictionaryLike.md)<`any`, `T`\>, [`EnumeratorLike`](../interfaces/core.EnumeratorLike.md)<`T`\>\>
