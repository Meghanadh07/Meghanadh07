!DOCTYPE html>
<html>
<head>
  <title>Email List</title>
  <script type="text/javascript">
    function copyEmailList() {
      var copyText = document.createElement("textarea");
      copyText.value = emailList;
      document.body.appendChild(copyText);
      copyText.select();
      document.execCommand("copy");
      document.body.removeChild(copyText);
      alert("Email list copied to clipboard!");
    }
  </script>
</head>
<body>
  <button onclick="copyEmailList()">Copy Email List</button>
  <script type="text/javascript" src="email_list.php"></script>
</body>
</html>
