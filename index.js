function ValidateEmail(inputText)
            {
                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(inputText.value.match(mailformat))
                {
                document.getElementById("feedback").innerHTML = "valid email address";
                document.form1.text1.focus();
                return true;
                }
                else
                {
                document.getElementById("feedback").innerHTML = "Please enter a valid email address";
                document.form1.text1.focus();
                return false;
                }
            }