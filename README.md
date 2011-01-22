**load.js is a micro JS lazy-loader (867 bytes gzipped)**

Built on top of [chain.js](https://github.com/chriso/chain.js), it allows you to lazy load your JS scripts sequentially or in parallel and handle complex dependency chains.

## Example

    load('jquery.js').then('jquery-ui.js', 'jquery-ui-theme.js').then('myscript.js').thenRun(function () {
        alert('Loaded.');
    });

    load('underscore.js');

**Some things to note:**

- `then()` is an alias for the previous method in the chain
- once *jQuery* has loaded, *jquery-ui.js* and *jquery-ui-theme.js* are loaded in parallel. When both are complete, *myscript.js* is loaded
- each chain is separate, so *underscore* and *jQuery* will load in parallel

## Example 2

Load a script after a 0.5s delay
    
    defer(500).thenLoad('myscript2.js');
    
## Example 3

    load('myscript2.js').onError(function (err) {
        //Handle any errors here..
    });
   
**For more examples of the available methods, see the [chain.js](https://github.com/chriso/chain.js) page**

### License

(MIT License)

Copyright (c) 2010 Chris O'Hara <cohara87@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


