'use strict';
const btnmodal=document.querySelectorAll('.show-modal');  //all buttons
const modal=document.querySelector('.modal'); //prompt after button
const close=document.querySelector('.close-modal'); // close button
const overlay=document.querySelector('.overlay'); // blurry effect



for(let i=0;i<btnmodal.length;i++)
{
    btnmodal[i].addEventListener('click',
        function()
        {
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        }
    );
}
close.addEventListener('click',
    function()
    {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
);
overlay.addEventListener('click',
    function()
    {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
);
document.addEventListener('keydown',
    function(event)
    {
        if(event.key==='Escape' && !modal.classList.contains('hidden'))
        {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    }
);
