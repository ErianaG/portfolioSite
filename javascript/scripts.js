
function validate()                                   
{
    var name = document.forms["contactForm"]["name"];              
    var email = document.forms["contactForm"]["email"];   
    var phone = document.forms["contactForm"]["phone"]; 
  
    if (name.value == "")                                 
    {
        alert("Please put in your name.");
        name.focus();
        return false;
    }
      
    if (email.value == "")                                  
    {
        alert("Please put in a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (email.value.indexOf("@", 0) < 0)                
    {
        alert("Please put in a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (email.value.indexOf(".", 0) < 0)                
    {
        alert("Please put in a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (phone.value == "")                          
    {
        alert("Please put in your phone number.");
        phone.focus();
        return false;
    }

    return true;
}
