
function validate()                                   
{
    var name = document.forms["contactForm"]["name"];              
    var email = document.forms["contactForm"]["email"];   
    var phone = document.forms["contactForm"]["phone"]; 
  
    if (name.value == "")                                 
    {
        alert("Please enter your name.");
        name.focus();
        return false;
    }
      
    if (email.value == "")                                  
    {
        alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (email.value.indexOf("@", 0) < 0)                
    {
        alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (email.value.indexOf(".", 0) < 0)                
    {
        alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (phone.value == "")                          
    {
        alert("Please enter your phone number.");
        phone.focus();
        return false;
    }

    return true;
}
