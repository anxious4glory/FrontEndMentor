function ValidateEmail(inputText)
            {
                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(inputText.value.match(mailformat))
                {
                document.getElementById("feedback").innerHTML = "valid email address";
                }
                else
                {
                document.getElementById("feedback").innerHTML = "Please enter a valid email address";
                }
            }