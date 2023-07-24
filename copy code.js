function copyToClipboardWithJavascript() {
  /* To access the clipboard */
  var copyText = document.getElementById("theList");
  /* Select the text to copy*/
  copyText.select();
  /* Copy the text from the clipboard*/
  document.execCommand("copy");
}
