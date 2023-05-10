[Reactive-JS](../README.md) / Iterable

# Module: Iterable

## Table of contents

### Interfaces

- [Signature](../interfaces/Iterable.Signature.md)
- [Type](../interfaces/Iterable.Type.md)

### Constructor Functions

- [fromReadonlyArray](Iterable.md#fromreadonlyarray)

### Transform Functions

- [enumerate](Iterable.md#enumerate)
- [toReadonlyArray](Iterable.md#toreadonlyarray)

## Constructor Functions

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `Iterable`<`T`\>\>

___

## Transform Functions

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, readonly `T`[]\>
