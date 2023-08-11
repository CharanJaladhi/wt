function Prime(){
    var num,arr=[],np="No prime number exists upto the above number";
    num=parseInt(document.getElementById("a").value);
    if (num==1 || num==2) {
        document.getElementById("result").value=np;
    }
    else{
        for (let index = 2; index < num; index++) {
            var count=0;
            for( let i = 2; i < index ; i++){
                if (index % i == 0) {
                    count+=1;
                }
            }
            if(count == 0)
                arr.push(index);
        }
        document.getElementById("result").value=arr; 
    }
}

function factorial(){
    var num,re=1;
    num=parseInt(document.getElementById("a").value);
    if(num==0)
    document.getElementById("result").value='1';
    for(let index=1;index<=num;index++){
        re*=index;
    }
    document.getElementById("result").value=re;
}

function palindrome(){
    var num,rev=0,r,pal="Palindrome",npal="Not Palindrome";
    num=parseInt(document.getElementById("a").value);
    var temp=num;
    while( temp > 0){
        r = temp % 10;
        rev = rev * 10 + r;
        temp = Math.floor(temp/10);
    }
    if (num == rev)
        document.getElementById("result").value=pal; 
    else
        document.getElementById("result").value=npal; 
}

function fibanocci(){
    var num,arr=[0,1],c=0;
    num=parseInt(document.getElementById("a").value);
    let a = 0,b=1;
    for (let index = 0; index < num; index++) {
        c=a+b;
        a=b;
        b=c;
        arr.push(c);
    }
    document.getElementById("result").value=arr;
}
