// Set Video Duration in proper place

function setDuration(indx) {  
 // var vidTag = document.querySelectorAll('video');
  // vidTag.forEach((val,index) => {
      
  var dur = document.getElementById('video-'+ indx).duration;
  duration = (dur/60).toFixed(2);
  
  document.getElementById('vid-'+ indx).textContent = duration + " mins";

    //});
}


// Get the modal
var modal = document.getElementById('id01');

// when the user clicks anywhere outside of the modal close it

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handlebars helperS
// substr to decorate string

//jquery tooltip

//$(document).on('mouseenter', "p", function () {
  //var $this = $(this);
  //if (this.offsetWidth < this.scrollWidth && !$this.attr('title')) {
      //$this.tooltip({
         // title: $this.text(),
          //placement: "bottom"
      //});
     // $this.tooltip('show');
  //}
//});
//$('.card-text').css('width',$('.card-text').parent().width());

// js tooltip

(function(){
    var paragraphs = document.paragraphs;
    for(var i=0; i < paragraphs.length; i++){
       var p = paragraphs[i];
       if(p.title !== ''){
         p.addEventListener('mouseover',createTip);
         p.addEventListener('mouseout',cancelTip);
       }
      console.log(p);
    } 
    function createTip(ev){
        var card = this.card-text;
        this.card = '';
        this.setAttribute("tooltip", card);
        var tooltipWrap = document.createElement("div"); //creates div
        tooltipWrap.className = 'tooltip'; //adds class
        tooltipWrap.appendChild(document.createTextNode(card)); //add the text node to the newly created div.
  
        var firstChild = document.body.firstChild;//gets the first elem after body
        firstChild.parentNode.insertBefore(tooltipWrap, firstChild); //adds tt before elem 
        var padding = 5;
        var paraProps = this.getBoundingClientRect();
        var tooltipProps = tooltipWrap.getBoundingClientRect(); 
        var topPos = paraProps.top - (tooltipProps.height + padding);
        tooltipWrap.setAttribute('style','top:'+topPos+'px;'+'left:'+paraProps.left+'px;');
        
    }
    function cancelTip(ev){
        var card = this.getAttribute("tooltip");
        this.card = card-text;
        this.removeAttribute("tooltip");
        document.querySelector(".tooltip").remove();
    }
  })();

//var tooltip = {
   // init: function(){
        //get all the paragaphs
       // var theparas=document.getElementsByTagName("p");

        //if(theparas){
            //for(var i=0; i<theparas.length; i++){
               // if(theparas[i].card-text.length){
                   // theparas[i].addEventListener("mouseover",tooltip.showtip);
                    //theparas[i].addEventListener("mouseout",tooltip.hidetip);

                //}
            //}
        //}
    //},

    //showtip: function(event){
        //create and add a span element to act as a tooltip
        //var spanelem=document.createElement("span");
        //spanelem.className="tooltip";
       // spanelem.innerHTML=event.target.card-text;
        //set targe elements title to nothing
        //event.target.card-text = "";
        //event.target.appendChild(spanelem);
        //event.target._spanRef=spanelem;

    //},

    //hidetip: function(event {
        //event.target.card-text = event.target._spanRef.innerHTML;
        //event.target.removeChild(event.target_spanRef);


   // }
//};
//window.addEventListener("load",tooltip.init);