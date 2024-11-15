const genFn = (l,n,c) => {
    let string = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    let pass = "";
    if(n==true){
        string+="1234567890"
    }
    if(c==true){
        string+="@#$%^&*-=_+;,.?"
    }
    for (let i = 1; i <= l; i++) {
        let ind = Math.floor((Math.random()*string.length));
        let d = string[ind]
        pass+=d;
    }
    return pass;
};

export default genFn