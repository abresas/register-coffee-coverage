Drop-in replacement for coffee-coverage, that makes sure coffee-coverage handles all .coffee files.

This module will become obsolete if coffee-coverage module fixes this issue.

This module is not meant to be used for ever, nor to cover all cases, but as an easy to use wrapper around coffee-coverage that fixes the problem described below.

The problem
-----------

If any of your files or sub-modules require 'coffee-script/register', they replace the existing handler for .coffee files, making coffee-coverage unable to see that those files were required during your tests.

If during your tests, some of the files do not get instrumented by coffee-coverage, this is probably the reason.

You can use register-coffee-coverage as a drop-in replacement to avoid this issue.

How to use
----------

Pass --require register-coffee-coverage instead of --require coffee-coverage/register-istanbul.

Configuration
-------------

There is no way to configure this module, sorry. If you want coffee-coverage/register or to pass your own instrumenter, you need to fork this project and do the changes yourself.
