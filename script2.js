// var foo = app.whll;
var app = {
whll: [['Jim Caldwell',
'Looks like the nervous armored car driver transporting his largest and last delivery, suspicious his new partner might be up to something. Jay Cutler is his new partner.',
'https://www.detroitathletic.com/blog/wp-content/uploads/2014/09/jim-caldwell-detroit-lions-2014.jpg'],['Jay Cutler','Looks like the guy trying to break into a house on an alarm company commercial.','https://usatthebiglead.files.wordpress.com/2012/11/jay-cutler-bears.jpg']],

// randomNum: Math.floor(Math.random() * foo),


randomize: function() {
            $('img').replaceWith('<img src='+guy[2]+'>');
            $('#name').replaceWith('<div id="name">'+guy[0]+'</div>');
            $('#lookslike').replaceWith('<div id="lookslike">'+guy[1]+'</div>');
          },

 foo: function() {console.log(this.whll);}
};
// app.randomize();
