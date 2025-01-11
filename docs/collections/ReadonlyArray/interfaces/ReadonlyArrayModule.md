[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [collections/ReadonlyArray](../README.md) / ReadonlyArrayModule

# Interface: ReadonlyArrayModule

## Extends

- [`CollectionModule`](../../interfaces/CollectionModule.md)\<[`ReadonlyArrayCollection`](ReadonlyArrayCollection.md)\>

## Methods

### entries()

> **entries**\<`T`, `TKey`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], `Iterable`\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TKey`, `T`\>\>\>

#### Type Parameters

• **T**

• **TKey** *extends* `number` = `number`

#### Parameters

##### options?

###### count

`number`

###### start

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], `Iterable`\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TKey`, `T`\>\>\>

#### Overrides

[`CollectionModule`](../../interfaces/CollectionModule.md).[`entries`](../../interfaces/CollectionModule.md#entries)

***

### fromIterable()

> **fromIterable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`Iterable`\<`T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Iterable`\<`T`\>, readonly `T`[]\>

***

### slice()

> **slice**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count

`number`

###### start

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], readonly `T`[]\>

***

### values()

> **values**\<`T`, `TKey`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], `Iterable`\<`T`\>\>

#### Type Parameters

• **T**

• **TKey** *extends* `number` = `number`

#### Parameters

##### options?

###### count

`number`

###### start

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], `Iterable`\<`T`\>\>

#### Overrides

[`CollectionModule`](../../interfaces/CollectionModule.md).[`values`](../../interfaces/CollectionModule.md#values)
