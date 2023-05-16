[Reactive-JS](../README.md) / Iterable

# Module: Iterable

## Table of contents

### Interfaces

- [IterableModule](../interfaces/Iterable.IterableModule.md)

### Type Aliases

- [Signature](Iterable.md#signature)
- [Type](Iterable.md#type)

### Constructor Functions

- [empty](Iterable.md#empty)
- [fromEnumeratorFactory](Iterable.md#fromenumeratorfactory)
- [fromFactory](Iterable.md#fromfactory)
- [fromIterable](Iterable.md#fromiterable)
- [fromOptional](Iterable.md#fromoptional)
- [fromReadonlyArray](Iterable.md#fromreadonlyarray)
- [fromValue](Iterable.md#fromvalue)

### Other Functions

- [toObservable](Iterable.md#toobservable)

### Transform Functions

- [enumerate](Iterable.md#enumerate)
- [toIterable](Iterable.md#toiterable)
- [toReadonlyArray](Iterable.md#toreadonlyarray)

## Type Aliases

### Signature

Ƭ **Signature**: [`IterableModule`](../interfaces/Iterable.IterableModule.md)

___

### Type

Ƭ **Type**: [`IterableContainer`](../interfaces/types.IterableContainer.md)

## Constructor Functions

### empty

▸ **empty**<`T`\>(): `Iterable`<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Iterable`<`T`\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>, `Iterable`<`T`\>\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, `Iterable`<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, `Iterable`<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, `Iterable`<`T`\>\>

___

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

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](functions.md#function1)<`T`, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`T`, `Iterable`<`T`\>\>

___

## Other Functions

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **toObservable**<`T`\>(`options`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

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

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, `Iterable`<`T`\>\>

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
