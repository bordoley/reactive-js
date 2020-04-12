
# @reactive-js/parser-combinators

## Index

### Interfaces

* [CharStreamLike](interfaces/charstreamlike.md)
* [ParserLike](interfaces/parserlike.md)

### Type aliases

* [CharCode](README.md#charcode)

### Variables

* [asterisk](README.md#const-asterisk)
* [closeParen](README.md#const-closeparen)
* [colon](README.md#const-colon)
* [comma](README.md#const-comma)
* [dash](README.md#const-dash)
* [equals](README.md#const-equals)
* [forwardSlash](README.md#const-forwardslash)
* [many1Satisfy](README.md#const-many1satisfy)
* [manySatisfy](README.md#const-manysatisfy)
* [openParen](README.md#const-openparen)
* [period](README.md#const-period)
* [quote](README.md#const-quote)
* [semicolon](README.md#const-semicolon)
* [space](README.md#const-space)

### Functions

* [char](README.md#const-char)
* [compute](README.md#const-compute)
* [concat](README.md#concat)
* [createCharStream](README.md#const-createcharstream)
* [eof](README.md#const-eof)
* [flatMap](README.md#const-flatmap)
* [followedBy](README.md#const-followedby)
* [many](README.md#const-many)
* [many1](README.md#const-many1)
* [manyMinMax](README.md#const-manyminmax)
* [manyMinMaxSatisfy](README.md#const-manyminmaxsatisfy)
* [map](README.md#const-map)
* [mapTo](README.md#const-mapto)
* [notFollowedBy](README.md#const-notfollowedby)
* [ofValue](README.md#const-ofvalue)
* [optional](README.md#const-optional)
* [or](README.md#const-or)
* [orDefault](README.md#const-ordefault)
* [parseWith](README.md#const-parsewith)
* [regexp](README.md#const-regexp)
* [satisfy](README.md#const-satisfy)
* [sepBy](README.md#const-sepby)
* [sepBy1](README.md#const-sepby1)
* [string](README.md#const-string)
* [throws](README.md#const-throws)

## Type aliases

###  CharCode

Ƭ **CharCode**: *number*

## Variables

### `Const` asterisk

• **asterisk**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char("*")

___

### `Const` closeParen

• **closeParen**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char(")")

___

### `Const` colon

• **colon**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char(":")

___

### `Const` comma

• **comma**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char(",")

___

### `Const` dash

• **dash**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char("-")

___

### `Const` equals

• **equals**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char("=")

___

### `Const` forwardSlash

• **forwardSlash**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char("/")

___

### `Const` many1Satisfy

• **many1Satisfy**: *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹number›, [ParserLike](interfaces/parserlike.md)‹string››* =  manyMinMaxSatisfy(1, Number.MAX_SAFE_INTEGER)

___

### `Const` manySatisfy

• **manySatisfy**: *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹number›, [ParserLike](interfaces/parserlike.md)‹string››* =  manyMinMaxSatisfy(0, Number.MAX_SAFE_INTEGER)

___

### `Const` openParen

• **openParen**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char("(")

___

### `Const` period

• **period**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char(".")

___

### `Const` quote

• **quote**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char('"')

___

### `Const` semicolon

• **semicolon**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char(";")

___

### `Const` space

• **space**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char(" ")

## Functions

### `Const` char

▸ **char**(`c`: string): *[ParserLike](interfaces/parserlike.md)‹[CharCode](README.md#charcode)›*

**Parameters:**

Name | Type |
------ | ------ |
`c` | string |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹[CharCode](README.md#charcode)›*

___

### `Const` compute

▸ **compute**<**T**>(`f`: function): *[ParserLike](interfaces/parserlike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (): *T*

**Returns:** *[ParserLike](interfaces/parserlike.md)‹T›*

___

###  concat

▸ **concat**<**TA**, **TB**>(`a`: [ParserLike](interfaces/parserlike.md)‹TA›, `b`: [ParserLike](interfaces/parserlike.md)‹TB›): *[ParserLike](interfaces/parserlike.md)‹[TA, TB]›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ParserLike](interfaces/parserlike.md)‹TA› |
`b` | [ParserLike](interfaces/parserlike.md)‹TB› |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹[TA, TB]›*

▸ **concat**<**TA**, **TB**, **TC**>(`a`: [ParserLike](interfaces/parserlike.md)‹TA›, `b`: [ParserLike](interfaces/parserlike.md)‹TB›, `c`: [ParserLike](interfaces/parserlike.md)‹TC›): *[ParserLike](interfaces/parserlike.md)‹[TA, TB, TC]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ParserLike](interfaces/parserlike.md)‹TA› |
`b` | [ParserLike](interfaces/parserlike.md)‹TB› |
`c` | [ParserLike](interfaces/parserlike.md)‹TC› |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹[TA, TB, TC]›*

___

### `Const` createCharStream

▸ **createCharStream**(`input`: string): *[CharStreamLike](interfaces/charstreamlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *[CharStreamLike](interfaces/charstreamlike.md)*

___

### `Const` eof

▸ **eof**(`charStream`: [CharStreamLike](interfaces/charstreamlike.md)): *undefined*

**Parameters:**

Name | Type |
------ | ------ |
`charStream` | [CharStreamLike](interfaces/charstreamlike.md) |

**Returns:** *undefined*

___

### `Const` flatMap

▸ **flatMap**<**TA**, **TB**>(`mapper`: function): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹TA›, [ParserLike](interfaces/parserlike.md)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`result`: TA): *[ParserLike](interfaces/parserlike.md)‹TB›*

**Parameters:**

Name | Type |
------ | ------ |
`result` | TA |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹TA›, [ParserLike](interfaces/parserlike.md)‹TB››*

___

### `Const` followedBy

▸ **followedBy**(`pnext`: [ParserLike](interfaces/parserlike.md)‹unknown›): *[ParserLike](interfaces/parserlike.md)‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`pnext` | [ParserLike](interfaces/parserlike.md)‹unknown› |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹unknown›*

___

### `Const` many

▸ **many**<**T**>(): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

___

### `Const` many1

▸ **many1**<**T**>(): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

___

### `Const` manyMinMax

▸ **manyMinMax**<**T**>(`min`: number, `max`: number): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

___

### `Const` manyMinMaxSatisfy

▸ **manyMinMaxSatisfy**(`min`: number, `max`: number): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹[CharCode](README.md#charcode)›, [ParserLike](interfaces/parserlike.md)‹string››*

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹[CharCode](README.md#charcode)›, [ParserLike](interfaces/parserlike.md)‹string››*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹TA›, [ParserLike](interfaces/parserlike.md)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`result`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`result` | TA |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹TA›, [ParserLike](interfaces/parserlike.md)‹TB››*

___

### `Const` mapTo

▸ **mapTo**<**TA**, **TB**>(`v`: TB): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹TA›, [ParserLike](interfaces/parserlike.md)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`v` | TB |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹TA›, [ParserLike](interfaces/parserlike.md)‹TB››*

___

### `Const` notFollowedBy

▸ **notFollowedBy**(`pnext`: [ParserLike](interfaces/parserlike.md)‹unknown›): *[ParserLike](interfaces/parserlike.md)‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`pnext` | [ParserLike](interfaces/parserlike.md)‹unknown› |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹unknown›*

___

### `Const` ofValue

▸ **ofValue**<**T**>(`value`: T): *[ParserLike](interfaces/parserlike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹T›*

___

### `Const` optional

▸ **optional**<**T**>(`parse`: [ParserLike](interfaces/parserlike.md)‹T›): *[ParserLike](interfaces/parserlike.md)‹T | undefined›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`parse` | [ParserLike](interfaces/parserlike.md)‹T› |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹T | undefined›*

___

### `Const` or

▸ **or**<**T**>(`otherParse`: [ParserLike](interfaces/parserlike.md)‹T›): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`otherParse` | [ParserLike](interfaces/parserlike.md)‹T› |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹T››*

___

### `Const` orDefault

▸ **orDefault**<**T**>(`default_`: T): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T | undefined›, [ParserLike](interfaces/parserlike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`default_` | T |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T | undefined›, [ParserLike](interfaces/parserlike.md)‹T››*

___

### `Const` parseWith

▸ **parseWith**<**T**>(`parse`: [ParserLike](interfaces/parserlike.md)‹T›): *OperatorLike‹string, T | undefined›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`parse` | [ParserLike](interfaces/parserlike.md)‹T› |

**Returns:** *OperatorLike‹string, T | undefined›*

___

### `Const` regexp

▸ **regexp**(`regexp`: RegExp, `group`: number): *[ParserLike](interfaces/parserlike.md)‹string›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`regexp` | RegExp | - |
`group` | number | 0 |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹string›*

___

### `Const` satisfy

▸ **satisfy**(`f`: function): *[ParserLike](interfaces/parserlike.md)‹[CharCode](README.md#charcode)›*

**Parameters:**

▪ **f**: *function*

▸ (`char`: [CharCode](README.md#charcode)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`char` | [CharCode](README.md#charcode) |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹[CharCode](README.md#charcode)›*

___

### `Const` sepBy

▸ **sepBy**<**T**>(`separator`: [ParserLike](interfaces/parserlike.md)‹unknown›): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`separator` | [ParserLike](interfaces/parserlike.md)‹unknown› |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

___

### `Const` sepBy1

▸ **sepBy1**<**T**>(`separator`: [ParserLike](interfaces/parserlike.md)‹unknown›): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`separator` | [ParserLike](interfaces/parserlike.md)‹unknown› |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

___

### `Const` string

▸ **string**(`str`: string): *[ParserLike](interfaces/parserlike.md)‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹string›*

___

### `Const` throws

▸ **throws**(`charStream`: [CharStreamLike](interfaces/charstreamlike.md)‹›): *never*

**Parameters:**

Name | Type |
------ | ------ |
`charStream` | [CharStreamLike](interfaces/charstreamlike.md)‹› |

**Returns:** *never*
