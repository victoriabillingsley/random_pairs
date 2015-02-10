$(document).ready(function(){
  var students = [
    "Kevin Litchfield",
    "Erika Lim",
    "Zubair Desai",
    "Nina Bachvarova",
    "Julien Mayer",
    "Denise Shephard",
    "Oscar Linares",
    "Max Gordon",
    "Dana Mulder",
    "Rory Grant",
    "Tina Hweicheng Loh",
    "Kristian Ziel",
    "Ngan Pham",
    "Brady Stilwell",
    "Michael Dean",
    "Alex Sell",
    "Michael Smykowski",
    "Luis Manzo",
    "Heather Farley",
    "Irina Tagintseva",
    "Lauren Richie",
    "Edozie Izegbu",
    "David Dang",
    "Bradley Johnson",
    "Helen Lam",
    "Cameron Irmas",
    "Victoria Billingsley",
    "Rosa Choi"
  ]


  var half_length = Math.ceil(students.length/2);
  var first_half = students.splice(0, half_length);
  var second_half = students

  var s_first_half = shuffle(first_half)
  var s_second_half = shuffle(second_half)


  var pairs = [];

  for (var i = 0; i < s_second_half.length; i++) {
    pairs.push([s_first_half[i], s_second_half[i]])
  };

  if (s_first_half.length > s_second_half.length) {
    pairs.push([s_first_half[s_first_half.length - 1], "" ])
  };

  console.log(pairs.length);

  for (var i = 0; i < pairs.length; i++) {
    $("#column1").append(
      "<div class='item'>"+ pairs[i][0][0] +"</div>"
    )
  };

  for (var i = 0; i < pairs.length; i++) {
    $("#column2").append(
      "<div class='item'>"+ pairs[i][1][0] +"</div>"
    )
  };
});

function shuffle(array) {

  var shuffled = []
  while (array.length > 0) {
    var selectionNumber = Math.floor(Math.random()*array.length)
    shuffled.push(array.splice(selectionNumber, 1));
  }

  return shuffled;
}
