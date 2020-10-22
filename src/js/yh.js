function djs(){
    var target=new Date()
    var from = new Date("2020-11-1 12:34:12");
    target=target.getTime()
    from=from.getTime()
    var differenceTime=from-target
    differenceTime=parseInt(differenceTime/1000)
    var day=Math.floor(differenceTime/(24*60*60))
    var afterHours=differenceTime-day*24*60*60
    var hours=Math.floor(afterHours/3600);
    var afterMinutes=afterHours-hours*3600;
    var minutes=Math.floor(afterMinutes/60);
    var seconds=afterMinutes-minutes*60
    var arr=[day,hours,minutes,seconds]
    
    var spanArr=document.getElementsByClassName('ms-d')
    
    for(var i=0;i<spanArr.length;i++){
        if(arr[i]<10){
            spanArr[i].innerHTML="0"+arr[i]
        }else{
            spanArr[i].innerHTML=arr[i]
        }
        
    }

}






