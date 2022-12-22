function login()
{
    var uname = document.getElementById("email").value;
    var pwd = document.getElementById("pwd1").value;
    if(uname =='')
    {
        alert("please enter user name.");
    }
    else if(pwd=='')
    {
        alert("enter the password");
    }
    else if(pwd.length < 6)
    {
        alert("Password min length is 6.");
    }
    else
    {
        if ((uname == 'tejas') & (pwd=='tejas123')){
            //Redirecting to other page or webste code or you can set your own html page.
            window.close()
            window.open('index.html')  
        }
        
        else{
            alert("Invalid Username or Password")
        }
    }
}

//Reset Inputfield code.
function clearFunc()
{
    document.getElementById("email").value="";
    document.getElementById("pwd1").value="";
}
