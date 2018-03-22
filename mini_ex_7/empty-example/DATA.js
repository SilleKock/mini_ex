// all variable used in sketch.js
var data=['computer','love','night','TV screen','rendezvous','number','data','date']; // alle navneord
var date =['stare','know','to do','need','call']; // alle udsagnsord
var number = ['at','the','dont','a','for']; // skraldeord
var need = ['another','i','what','this']; // alle pronomer
var lonely = 0;
var computerlove = 0;
var night;
var datacount = 0;
var datecount = 0;
var numbercount = 0;
var needcount = 0;
var needa = 0;
var rendezvous = 0;


// function for all the text
function COMPUTERLOVE(x,y){
fill('white');
textFont('Courier');
textSize(32);
text('{ This json file contains the lyrics from Computer Love by Kraftwerk',50,100);
// nouns
text('[',x-50,y); //y = 150
text('{',x,y+50);
text('Nouns:',x,y+100);
text('PENN TAG: nn',x,y+150);
text('}',x,y+200);
// verbs
text('{',x,y+250);
text('Verbs:',x,y+300);
text('PENN TAG: vb',x,y+350);
text('}',x,y+400);
//pronouns
text('{',x,y+450)
text('Pronouns:',x,y+500);
text('PENN TAG: pp',x,y+550);
text('}',x,y+600);
// undefined
text('{',x,y+650);
text('Undefined:',x,y+700);
text('PENN TAG: null',x,y+750);
text('}',x,y+800);
text('}',x-100,y+850);
}

// the functions for displaying the arrays

function stareatTVscreen(x,y){
    fill('white');
    textFont('Courier');
    textSize(32);
    text(data[datacount],x,y);
}

function callthisnumber(x,y){
    fill('white');
    textFont('Courier');
    textSize(32);
    text(date[datecount],x,y);
}

function anotherlonelynight(x,y){
    fill('white');
    textFont('Courier');
    textSize(32);
    text(number[numbercount],x,y);

}

function dontknowwhattodo(x,y){
    fill('white');
    textFont('Courier');
    textSize(32);
    text(need[needcount],x,y);
}

// function for counter

function DATADATE (x){

  datacount++;
  if(datacount>=data.length){
    datacount=x;
  }
  datecount++;
  if(datecount>=date.length){
    datecount=x;
  }
  numbercount++;
  if(numbercount>=number.length){
    numbercount=x;
  }
  needcount++;
  if(needcount>=need.length){
    needcount=x;
  }
}
