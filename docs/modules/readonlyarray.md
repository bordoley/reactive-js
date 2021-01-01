[Reactive-JS](../README.md) / readonlyArray

# Module: readonlyArray

## Index

### Type aliases

* [ReadonlyArrayOperator](readonlyarray.md#readonlyarrayoperator)

### Functions

* [everySatisfy](readonlyarray.md#everysatisfy)
* [fromObject](readonlyarray.md#fromobject)
* [join](readonlyarray.md#join)
* [keep](readonlyarray.md#keep)
* [length](readonlyarray.md#length)
* [map](readonlyarray.md#map)
* [reduce](readonlyarray.md#reduce)
* [reduceRight](readonlyarray.md#reduceright)

## Type aliases

### ReadonlyArrayOperator

Ƭ **ReadonlyArrayOperator**<TA, TB\>: [*Function1*](functions.md#function1)<readonly TA[], readonly TB[]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

## Functions

### everySatisfy

▸ `Const`**everySatisfy**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<T\>): [*Function1*](functions.md#function1)<readonly T[], *boolean*\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<T\> |

**Returns:** [*Function1*](functions.md#function1)<readonly T[], *boolean*\>

___

### fromObject

▸ `Const`**fromObject**<T\>(): [*Function1*](functions.md#function1)<[*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<T\>, readonly [*string*, T][]\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<T\>, readonly [*string*, T][]\>

___

### join

▸ `Const`**join**(`separator?`: *string*): [*Function1*](functions.md#function1)<readonly *string*[], *string*\>

#### Parameters:

Name | Type |
------ | ------ |
`separator?` | *string* |

**Returns:** [*Function1*](functions.md#function1)<readonly *string*[], *string*\>

___

### keep

▸ `Const`**keep**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<T\>): [*Function1*](functions.md#function1)<readonly T[], readonly T[]\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<T\> |

**Returns:** [*Function1*](functions.md#function1)<readonly T[], readonly T[]\>

___

### length

▸ `Const`**length**(`arr`: readonly *unknown*[]): *number*

#### Parameters:

Name | Type |
------ | ------ |
`arr` | readonly *unknown*[] |

**Returns:** *number*

___

### map

▸ `Const`**map**<TA, TB\>(`mapper`: [*Function1*](functions.md#function1)<TA, TB\>): [*Function1*](functions.md#function1)<readonly TA[], readonly TB[]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`mapper` | [*Function1*](functions.md#function1)<TA, TB\> |

**Returns:** [*Function1*](functions.md#function1)<readonly TA[], readonly TB[]\>

___

### reduce

▸ `Const`**reduce**<T, TAcc\>(`reducer`: [*Reducer*](functions.md#reducer)<T, TAcc\>, `initialValue`: [*Factory*](functions.md#factory)<TAcc\>): [*Function1*](functions.md#function1)<readonly T[], TAcc\>

#### Type parameters:

Name |
------ |
`T` |
`TAcc` |

#### Parameters:

Name | Type |
------ | ------ |
`reducer` | [*Reducer*](functions.md#reducer)<T, TAcc\> |
`initialValue` | [*Factory*](functions.md#factory)<TAcc\> |

**Returns:** [*Function1*](functions.md#function1)<readonly T[], TAcc\>

___

### reduceRight

▸ `Const`**reduceRight**<T, TAcc\>(`reducer`: [*Reducer*](functions.md#reducer)<T, TAcc\>, `initialValue`: [*Factory*](functions.md#factory)<TAcc\>): [*Function1*](functions.md#function1)<readonly T[], TAcc\>

#### Type parameters:

Name |
------ |
`T` |
`TAcc` |

#### Parameters:

Name | Type |
------ | ------ |
`reducer` | [*Reducer*](functions.md#reducer)<T, TAcc\> |
`initialValue` | [*Factory*](functions.md#factory)<TAcc\> |

**Returns:** [*Function1*](functions.md#function1)<readonly T[], TAcc\>
