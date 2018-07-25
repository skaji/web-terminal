"use strict";

(function () {
  var inputEditor = ace.edit("input");
  inputEditor.renderer.setScrollMargin(10, 10);
  inputEditor.setTheme("ace/theme/twilight");
  inputEditor.session.setMode("ace/mode/text");
  var outputEditor = ace.edit("output", { readOnly: true });
  outputEditor.renderer.setScrollMargin(10, 10);
  outputEditor.setTheme("ace/theme/twilight");
  outputEditor.session.setMode("ace/mode/text");
  outputEditor.setValue("the new text here");
}());
