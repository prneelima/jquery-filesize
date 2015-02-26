# jquery-filesize

Converting raw bytes size into human readable string is a very frequently used task.

I developed a plugin that converts raw bytes into KB or MB and its usage is very simple.

Suppose if you want to show 1000 bytes in human readable form inside a span assign the value as size attribute

<span class="jqfilesize" size="1000"></span>

and use jQuery(".jqfilesize").filesize();

output will be <span class="jqfilesize" size="1000">1 KB</span>

This can be used by any projects without any licensing requirements
