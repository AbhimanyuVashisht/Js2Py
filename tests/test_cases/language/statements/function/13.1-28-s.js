// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: >
    Refer 13.1; 
    It is a SyntaxError if any Identifier value occurs more than once within a FormalParameterList of a strict mode
    FunctionDeclaration or FunctionExpression.
es5id: 13.1-28-s
description: >
    Strict Mode - SyntaxError is thrown if a function is created using
    a FunctionDeclaration whose FunctionBody is contained in strict
    code and the function has three identical parameters
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        

        try {
            eval("function _13_1_28_fun(param, param, param) { 'use strict'; }");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
