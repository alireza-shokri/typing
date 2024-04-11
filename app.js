const worold=[
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
    "q","r","s","t","u","v","w","x","y","z"," ",".",",","!",":","?",";"
    ]
    let matn='Lorem ipsum perspiciatis, sapiente, error possimus illum facilis accusantium?orelam minima. Lorem ipsum dos aperiam modi temporibus. Aut, solutlam ex.e!'
    let parentAllWrold=document.querySelector('.parent_all_world');
    let time=document.querySelector('.time');
    let all=document.getElementsByClassName('span_world');
    let refrsh=document.querySelector('.refrsh');

    refrsh.addEventListener('click',refrshhandler);
    document.body.addEventListener('keydown',typingHandler);

    let shomar=0;
    let minut=0;
    let secend=0;
    let sadomSecend=0;
    let vazet=false;
    let timeStart;
    let allTime;
    let interval;
    let StrMinut;
    let StrSecend;
    let StrSadomSecend;

    // crredet li-----------------------------------
    for (var i=0;i<matn.length;i++){
        var newspan=document.createElement('span');
        newspan.innerHTML=matn[i];
        newspan.classList.add('span_world');
        parentAllWrold.append(newspan);
        if(newspan.textContent==' ')  
            newspan.style.padding='8px';
}
    // tiem-----------------------------------
    function fortime(){
       interval=setInterval(() => {
            sadomSecend++

            if(sadomSecend===100){ secend++; sadomSecend=0;   
                if(secend===60){minut++;secend=0;}}

            StrSadomSecend=String(sadomSecend).padStart(2,'0');
            StrSecend=String(secend).padStart(2,'0 ');
            StrMinut=String(minut).padStart(2,'0 ');
            document.querySelector('.sadomsecend_span').textContent=StrSadomSecend;
            document.querySelector('.secend_span').textContent=StrSecend;
            document.querySelector('.minut_span').textContent=StrMinut;

            // clear_interval------------------------
           if(all.length==shomar){
               clearInterval(interval);
           }
        }, 10);
    }


    // speed-----------------------------------
    function speedd(){
        let intervalspeed=setInterval(() => {
            // timestat-time end
            allTime=(new Date()-timeStart)/60000 ;
            document.querySelector('.speed_time').textContent=Math.floor(shomar/allTime);
            if(all.length==shomar){
                 clearInterval(intervalspeed);
            }
        }, 100);
    }


    // bordar-----------------------------------
    function bordarword(){
        if(shomar+1<all.length){  all[shomar+1].style.border='solid 1px aqua'; all[shomar].style.border='none';}
    }

    //  scroo-----------------------------------
    function checkScroll() {
        if (shomar === all.length / 2) {
            const currentWordPosition = all[shomar].getBoundingClientRect();
            window.scrollTo(0, currentWordPosition.top - window.innerHeight / 2);
        }
    }
    // onkeydown-----------------------------------
    all[shomar].style.border='solid 1px aqua';

    function typingHandler(event){
        event.preventDefault();
        checkScroll()
       if (shomar<all.length||event.key=='Backspace'){
            if (worold.includes(event.key.toLowerCase())){

                // vazet varibalr for do onebar
                if(!vazet){
                    timeStart=new Date();
                    fortime();
                    speedd();
                    vazet=true;
                }
                if(event.key===matn[shomar]){
                    all[shomar].style.color='green';
                    bordarword();
                    shomar++;
                }
                else if(event.key!==matn[shomar]){
                    all[shomar].style.background='red';
                    bordarword();
                    shomar++;
                }
            }
            else if(event.key==='Backspace' && shomar>0){
                if(all.length===shomar){
                    fortime();
                    speedd();
                }
                if(all[shomar-1].style.color){ all[shomar-1].style.color='wheat';}
                if(all[shomar-1].style.background){ all[shomar-1].style.background='none';}
               
                if(shomar==all.length){all[shomar-1].style.border='none'; }
                else {all[shomar].style.border='none';} 
                all[shomar-1].style.border='solid 1px aqua';
                shomar--;
            }
            if(all.length/2==shomar){
                window.scrollTo(0,400);
            }

    
        }
    }


    // refrsh-----------------------------------
    function refrshhandler(){
        if(shomar==all.length){all[shomar-1].style.border='none'; }
        else {all[shomar].style.border='none';} 

        clearInterval(interval);

        for(var t=0;shomar>t;shomar--){all[shomar-1].style.background='none';all[shomar-1].style.color='wheat'}
        document.querySelector('.sadomsecend_span').textContent='00';
        document.querySelector('.secend_span').textContent='00';
        document.querySelector('.minut_span').textContent='00';

        secend=0;
        sadomSecend=0;
        minut=0;
        shomar=0;
        timeStart=0;
        allTime=0;
        document.querySelector('.speed_time').textContent='0';
        vazet=false;
        all[shomar].style.border='solid 1px aqua';
    }