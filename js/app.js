const projet={

init: function(){
    const changeText=document.getElementById('arrow-left');
    const changeTextRigth=document.getElementById('arrow-right');
    changeText.addEventListener('click',projet.getText);
    changeTextRigth.addEventListener('click',projet.getText);
},

getText: function(event){
    event.preventDefault();
     if(document.getElementById('first-container').style.display != "none"){
        document.getElementById('first-container').style.display = "none";
        document.getElementById('image-mobile1').style.display = "none";
        document.getElementById('second-container').style.display='block';
        document.getElementById('image-mobile2').style.display = "block";        
        document.getElementById('third-container').style.display = "none";
        document.getElementById('image-mobile3').style.display = "none";
    }
    else if(document.getElementById('second-container').style.display != "none"){
        document.getElementById('first-container').style.display='none';
        document.getElementById('image-mobile1').style.display = "none";
        document.getElementById('second-container').style.display='none';
        document.getElementById('image-mobile2').style.display = "none";
        document.getElementById('third-container').style.display = "block";
        document.getElementById('image-mobile3').style.display = "block";
    } else if (document.getElementById('third-container').style.display != "none"){
        document.getElementById('first-container').style.display='block';
        document.getElementById('image-mobile1').style.display = "block";
        document.getElementById('second-container').style.display='none';
        document.getElementById('image-mobile2').style.display = "none";
        document.getElementById('third-container').style.display = "none";
        document.getElementById('image-mobile3').style.display = "none";
    }
    }
   /*  document.getElementById('first-container').style.display = 'none';
    document.getElementById('second-container').style.display = 'block'; */

};
projet.init();