[Reactive-JS](../README.md) / option

# Module: option

## Index

### Type aliases

* [Option](option.md#option)

### Variables

* [none](option.md#none)

### Functions

* [isNone](option.md#isnone)
* [isSome](option.md#issome)
* [map](option.md#map)
* [orCompute](option.md#orcompute)

## Type aliases

### Option

Ƭ **Option**<T\>: T \| *undefined*

Represents an unboxed value of type T or undefined.

#### Type parameters:

Name |
------ |
`T` |

## Variables

### none

• `Const` **none**: *undefined*

An alias for undefined.

## Functions

### isNone

▸ `Const`**isNone**<T\>(`option`: [*Option*](option.md#option)<T\>): option is undefined

Returns true if `option` is `none`.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`option` | [*Option*](option.md#option)<T\> |

**Returns:** option is undefined

___

### isSome

▸ `Const`**isSome**<T\>(`option`: [*Option*](option.md#option)<T\>): option is T

Returns true if `option` is not `none`.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`option` | [*Option*](option.md#option)<T\> |

**Returns:** option is T

___

### map

▸ `Const`**map**<TA, TB\>(`f`: [*Function1*](functions.md#function1)<TA, TB\>): [*Function1*](functions.md#function1)<[*Option*](option.md#option)<TA\>, [*Option*](option.md#option)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`f` | [*Function1*](functions.md#function1)<TA, TB\> |

**Returns:** [*Function1*](functions.md#function1)<[*Option*](option.md#option)<TA\>, [*Option*](option.md#option)<TB\>\>

___

### orCompute

▸ `Const`**orCompute**<T\>(`compute`: [*Factory*](functions.md#factory)<T\>): [*Function1*](functions.md#function1)<[*Option*](option.md#option)<T\>, T\>

Returns a function that takes an `Option<T>`, returning it's value
if not `none`, otherwise returns the result of invoking the function `compute`.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`compute` | [*Factory*](functions.md#factory)<T\> |

**Returns:** [*Function1*](functions.md#function1)<[*Option*](option.md#option)<T\>, T\>
