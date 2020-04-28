[@reactive-js/core - v0.0.37](../README.md) › ["testing"](_testing_.md)

# Module: "testing"

## Index

### Enumerations

* [TestGroupType](../enums/_testing_.testgrouptype.md)

### Type aliases

* [Describe](_testing_.md#describe)
* [Test](_testing_.md#test)
* [TestAsync](_testing_.md#testasync)
* [TestGroup](_testing_.md#testgroup)

### Functions

* [describe](_testing_.md#const-describe)
* [expectArrayEquals](_testing_.md#const-expectarrayequals)
* [expectEquals](_testing_.md#const-expectequals)
* [expectFalse](_testing_.md#const-expectfalse)
* [expectNone](_testing_.md#const-expectnone)
* [expectPromiseToThrow](_testing_.md#const-expectpromisetothrow)
* [expectSome](_testing_.md#const-expectsome)
* [expectToHaveBeenCalledTimes](_testing_.md#const-expecttohavebeencalledtimes)
* [expectToThrow](_testing_.md#const-expecttothrow)
* [expectToThrowError](_testing_.md#const-expecttothrowerror)
* [expectTrue](_testing_.md#const-expecttrue)
* [mockFn](_testing_.md#const-mockfn)
* [test](_testing_.md#const-test)
* [testAsync](_testing_.md#const-testasync)

## Type aliases

###  Describe

Ƭ **Describe**: *object*

#### Type declaration:

* **name**: *string*

* **tests**: *keyof TestGroup[]*

* **type**: *[Describe](../enums/_testing_.testgrouptype.md#describe)*

___

###  Test

Ƭ **Test**: *object*

#### Type declaration:

* **f**(): *function*

  * (): *void*

* **name**: *string*

* **type**: *[Test](../enums/_testing_.testgrouptype.md#test)*

___

###  TestAsync

Ƭ **TestAsync**: *object*

#### Type declaration:

* **f**(): *function*

  * (): *Promise‹void›*

* **name**: *string*

* **type**: *[TestAsync](../enums/_testing_.testgrouptype.md#testasync)*

___

###  TestGroup

Ƭ **TestGroup**: *[Describe](_testing_.md#describe) | [Test](_testing_.md#test) | [TestAsync](_testing_.md#testasync)*

## Functions

### `Const` describe

▸ **describe**(`name`: string, ...`tests`: [TestGroup](_testing_.md#testgroup)[]): *[Describe](_testing_.md#describe)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`...tests` | [TestGroup](_testing_.md#testgroup)[] |

**Returns:** *[Describe](_testing_.md#describe)*

___

### `Const` expectArrayEquals

▸ **expectArrayEquals**<**T**>(`b`: keyof T[], `valuesAreEqual?`: function): *(Anonymous function)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **b**: *keyof T[]*

▪`Optional`  **valuesAreEqual**: *function*

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *(Anonymous function)*

___

### `Const` expectEquals

▸ **expectEquals**<**T**>(`b`: T, `valuesAreEqual`: referenceEquals): *(Anonymous function)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`b` | T | - |
`valuesAreEqual` | referenceEquals | referenceEquals |

**Returns:** *(Anonymous function)*

___

### `Const` expectFalse

▸ **expectFalse**(`v`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`v` | boolean |

**Returns:** *void*

___

### `Const` expectNone

▸ **expectNone**(`v`: [Option](_option_.md#option)‹unknown›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Option](_option_.md#option)‹unknown› |

**Returns:** *void*

___

### `Const` expectPromiseToThrow

▸ **expectPromiseToThrow**(`promise`: Promise‹any›): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`promise` | Promise‹any› |

**Returns:** *Promise‹void›*

___

### `Const` expectSome

▸ **expectSome**(`v`: [Option](_option_.md#option)‹unknown›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Option](_option_.md#option)‹unknown› |

**Returns:** *void*

___

### `Const` expectToHaveBeenCalledTimes

▸ **expectToHaveBeenCalledTimes**(`times`: number): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`times` | number |

**Returns:** *(Anonymous function)*

___

### `Const` expectToThrow

▸ **expectToThrow**(`f`: function): *void*

**Parameters:**

▪ **f**: *function*

▸ (): *void*

**Returns:** *void*

___

### `Const` expectToThrowError

▸ **expectToThrowError**(`error`: unknown): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | unknown |

**Returns:** *(Anonymous function)*

___

### `Const` expectTrue

▸ **expectTrue**(`v`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`v` | boolean |

**Returns:** *void*

___

### `Const` mockFn

▸ **mockFn**(`retval?`: any): *MockFunction*

**Parameters:**

Name | Type |
------ | ------ |
`retval?` | any |

**Returns:** *MockFunction*

___

### `Const` test

▸ **test**(`name`: string, `f`: function): *[Test](_testing_.md#test)*

**Parameters:**

▪ **name**: *string*

▪ **f**: *function*

▸ (): *void*

**Returns:** *[Test](_testing_.md#test)*

___

### `Const` testAsync

▸ **testAsync**(`name`: string, `f`: function): *[TestAsync](_testing_.md#testasync)*

**Parameters:**

▪ **name**: *string*

▪ **f**: *function*

▸ (): *Promise‹void›*

**Returns:** *[TestAsync](_testing_.md#testasync)*
