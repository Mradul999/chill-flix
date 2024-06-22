export const Validate=(email,password,FullName)=>{
    const isEmailValid=/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isFullNameValid=/^[a-zA-Z\s\-]+$/.test(FullName);
    if(!isFullNameValid){
        return "Name is not Valid";
    }
    if(!isEmailValid){
        
        return "Email is not Valid";
        
    }
    if(!isPasswordValid){
       
        return "Password is not Valid";
        
    }
    

    

    return null;
    
   
}