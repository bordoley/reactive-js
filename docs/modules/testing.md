[Reactive-JS](../README.md) / testing

# Module: testing

## Index

### Type aliases

* [Describe](testing.md#describe)
* [Test](testing.md#test)
* [TestAsync](testing.md#testasync)
* [TestGroup](testing.md#testgroup)

### Functions

* [describe](testing.md#describe)
* [expectArrayEquals](testing.md#expectarrayequals)
* [expectEquals](testing.md#expectequals)
* [expectFalse](testing.md#expectfalse)
* [expectNone](testing.md#expectnone)
* [expectPromiseToThrow](testing.md#expectpromisetothrow)
* [expectSome](testing.md#expectsome)
* [expectToHaveBeenCalledTimes](testing.md#expecttohavebeencalledtimes)
* [expectToThrow](testing.md#expecttothrow)
* [expectToThrowError](testing.md#expecttothrowerror)
* [expectTrue](testing.md#expecttrue)
* [mockFn](testing.md#mockfn)
* [runTests](testing.md#runtests)
* [test](testing.md#test)
* [testAsync](testing.md#testasync)

## Type aliases

### Describe

Ƭ **Describe**: { `name`: *string* ; `tests`: readonly [*TestGroup*](testing.md#testgroup)[] ; `type`: TestGroupType.Describe  }

#### Type declaration:

Name | Type |
------ | ------ |
`name` | *string* |
`tests` | readonly [*TestGroup*](testing.md#testgroup)[] |
`type` | TestGroupType.Describe |

___

### Test

Ƭ **Test**: { `f`: [*Function1*](functions.md#function1)<*string*, [*SideEffect*](functions.md#sideeffect)\> ; `name`: *string* ; `type`: TestGroupType.Test  }

#### Type declaration:

Name | Type |
------ | ------ |
`f` | [*Function1*](functions.md#function1)<*string*, [*SideEffect*](functions.md#sideeffect)\> |
`name` | *string* |
`type` | TestGroupType.Test |

___

### TestAsync

Ƭ **TestAsync**: { `f`: [*Function1*](functions.md#function1)<*string*, [*Factory*](functions.md#factory)<*Promise*<*void*\>\>\> ; `name`: *string* ; `type`: TestGroupType.TestAsync  }

#### Type declaration:

Name | Type |
------ | ------ |
`f` | [*Function1*](functions.md#function1)<*string*, [*Factory*](functions.md#factory)<*Promise*<*void*\>\>\> |
`name` | *string* |
`type` | TestGroupType.TestAsync |

___

### TestGroup

Ƭ **TestGroup**: [*Describe*](testing.md#describe) \| [*Test*](testing.md#test) \| [*TestAsync*](testing.md#testasync)

## Functions

### describe

▸ `Const`**describe**(`name`: *string*, ...`tests`: [*TestGroup*](testing.md#testgroup)[]): [*Describe*](testing.md#describe)

#### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`...tests` | [*TestGroup*](testing.md#testgroup)[] |

**Returns:** [*Describe*](testing.md#describe)

___

### expectArrayEquals

▸ `Const`**expectArrayEquals**\<T>(`b`: readonly T[], `valueEquality?`: [*Equality*](functions.md#equality)<T\>): function

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`b` | readonly T[] |
`valueEquality?` | [*Equality*](functions.md#equality)<T\> |

**Returns:** function

___

### expectEquals

▸ `Const`**expectEquals**\<T>(`b`: T, `valueEquality?`: <T_1\>(`a`: T\_1, `b`: T\_1) => *boolean*): function

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`b` | T |
`valueEquality?` | <T_1\>(`a`: T\_1, `b`: T\_1) => *boolean* |

**Returns:** function

___

### expectFalse

▸ `Const`**expectFalse**(`v`: *boolean*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`v` | *boolean* |

**Returns:** *void*

___

### expectNone

▸ `Const`**expectNone**(`v`: *unknown*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`v` | *unknown* |

**Returns:** *void*

___

### expectPromiseToThrow

▸ `Const`**expectPromiseToThrow**(`promise`: *Promise*<*any*\>): *Promise*<*void*\>

#### Parameters:

Name | Type |
------ | ------ |
`promise` | *Promise*<*any*\> |

**Returns:** *Promise*<*void*\>

___

### expectSome

▸ `Const`**expectSome**(`v`: *unknown*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`v` | *unknown* |

**Returns:** *void*

___

### expectToHaveBeenCalledTimes

▸ `Const`**expectToHaveBeenCalledTimes**(`times`: *number*): function

#### Parameters:

Name | Type |
------ | ------ |
`times` | *number* |

**Returns:** function

___

### expectToThrow

▸ `Const`**expectToThrow**(`f`: [*SideEffect*](functions.md#sideeffect)): *void*

#### Parameters:

Name | Type |
------ | ------ |
`f` | [*SideEffect*](functions.md#sideeffect) |

**Returns:** *void*

___

### expectToThrowError

▸ `Const`**expectToThrowError**(`error`: *unknown*): function

#### Parameters:

Name | Type |
------ | ------ |
`error` | *unknown* |

**Returns:** function

___

### expectTrue

▸ `Const`**expectTrue**(`v`: *boolean*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`v` | *boolean* |

**Returns:** *void*

___

### mockFn

▸ `Const`**mockFn**(`retval?`: *any*): MockFunction

#### Parameters:

Name | Type |
------ | ------ |
`retval?` | *any* |

**Returns:** MockFunction

___

### runTests

▸ `Const`**runTests**(`testGroups`: [*TestGroup*](testing.md#testgroup)[]): *void*

#### Parameters:

Name | Type |
------ | ------ |
`testGroups` | [*TestGroup*](testing.md#testgroup)[] |

**Returns:** *void*

___

### test

▸ `Const`**test**(`name`: *string*, `f`: [*SideEffect*](functions.md#sideeffect)): [*Test*](testing.md#test)

#### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`f` | [*SideEffect*](functions.md#sideeffect) |

**Returns:** [*Test*](testing.md#test)

___

### testAsync

▸ `Const`**testAsync**(`name`: *string*, `f`: [*Factory*](functions.md#factory)<*Promise*<*void*\>\>): [*TestAsync*](testing.md#testasync)

#### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`f` | [*Factory*](functions.md#factory)<*Promise*<*void*\>\> |

**Returns:** [*TestAsync*](testing.md#testasync)
