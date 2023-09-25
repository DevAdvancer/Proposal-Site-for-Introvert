setTimeout(function () {
  var love = setInterval(function () {
    // Your heart animation code here
  }, 500);

  var i = 0;
  var txt1 =
    "Hi Disha.....!  <<               Now I want to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seemed someone really auspicious to me.  <<                  As time flies < I feel to get a step closer to you....! <<                           I don't know the reason why your thoughts always resonate inside my mind...!                                                     > Everything about you is always interesting for me...!                     << I am somewhat nervous Because I haven't said these words to anyone with this emotion and I won't say to anyone in the future...!                                                     > I Love my Parents and sister so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                                             > I Love U <Disha.....!                   <<<< Give me One chance to Prove my Love and Don't Worry my love would be as big as I am 😆...!";
  var speed = 50;

  function typeWriter() {
    if (i < txt1.length) {
      if (txt1.charAt(i) == '<') document.getElementById("text1").innerHTML += '</br>';
      else if (txt1.charAt(i) == '>') document.getElementById("text1").innerHTML = '';
      else if (txt1.charAt(i) == '|') {
        //
      } else document.getElementById("text1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
}, 2000); // Start after a delay of 2 seconds (2000 milliseconds)
