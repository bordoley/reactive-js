[Reactive-JS](../README.md) / util/Dictionary

# Module: util/Dictionary

## Table of contents

### Constructor Functions

- [empty](util_Dictionary.md#empty)

### Transform Functions

- [entries](util_Dictionary.md#entries)
- [keys](util_Dictionary.md#keys)
- [values](util_Dictionary.md#values)

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(): [`DictionaryLike`](../interfaces/util.DictionaryLike.md)<`TKey`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`DictionaryLike`](../interfaces/util.DictionaryLike.md)<`TKey`, `T`\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/util.DictionaryLike.md)<`TKey`, `T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/util.DictionaryLike.md)<`TKey`, `T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<[`TKey`, `T`]\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/util.DictionaryLike.md)<`TKey`, `unknown`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/util.DictionaryLike.md)<`TKey`, `unknown`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`TKey`\>\>

___

### values

▸ **values**<`T`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/util.DictionaryLike.md)<`any`, `T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/util.DictionaryLike.md)<`any`, `T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>\>
