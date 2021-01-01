[Reactive-JS](../README.md) / router

# Module: router

## Index

### Type aliases

* [Router](router.md#router)

### Functions

* [createRouter](router.md#createrouter)
* [find](router.md#find)

## Type aliases

### Router

Ƭ **Router**<T\>: { `children`: [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<[*Router*](router.md#router)<T\>\> ; `name`: *string* ; `value?`: T  }

#### Type parameters:

Name |
------ |
`T` |

#### Type declaration:

Name | Type |
------ | ------ |
`children` | [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<[*Router*](router.md#router)<T\>\> |
`name` | *string* |
`value?` | T |

## Functions

### createRouter

▸ `Const`**createRouter**<T\>(`routeMap`: [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<T\>): [*Router*](router.md#router)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`routeMap` | [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<T\> |

**Returns:** [*Router*](router.md#router)<T\>

___

### find

▸ `Const`**find**<T\>(`router`: [*Router*](router.md#router)<T\>, `path`: *string*): [*Option*](option.md#option)<[T, [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<*string*\>]\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`router` | [*Router*](router.md#router)<T\> |
`path` | *string* |

**Returns:** [*Option*](option.md#option)<[T, [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<*string*\>]\>
