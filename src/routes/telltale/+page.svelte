<script>
  /** Storing pictures **/
  let images = [
  ["https://cdn.discordapp.com/attachments/989739627244048384/1070707884624711750/Alex_Gay_once_upon_a_time_91cd59a4-0832-48ad-9d47-d90de1b54e69.png","once upon a time"],
  ["https://cdn.discordapp.com/attachments/989739627244048384/1070705925939286026/Alex_Gay_A_prince_sent_to_a_journey_434ae35c-f701-44ec-accb-618b757537c7.png", "2"],
  ["https://cdn.discordapp.com/attachments/989739627244048384/1070710538235039855/Alex_Gay_The_prince_encountered_many_challenges_along_the_way._2cf06c4f-3ec4-425e-be9d-089020e21f5b.png","3"],
  ["https://cdn.discordapp.com/attachments/989739627244048384/1070708976339128360/Alex_Gay_in_the_end_The_prince_emerged_victorious_and_saved_the_1c68e497-9d14-468d-9764-7578451d36c2.png","4"],
  ["https://cdn.discordapp.com/attachments/1008571074981658694/1070712754786279444/SultanTheGoat_The_story_of_the_king_with_many_victorious_and_sa_0680514b-1909-426a-91b8-01a8197d863c.png","5"],
  ["https://cdn.discordapp.com/attachments/966491148640211034/1070724785769820320/Alex_Gay_the_story_of_the_king_with_many_victories_and_saving_h_cd7861ca-a59c-40e4-b8fb-1bbc5a50d7fe.png", "The end of the story"]
]

/** Storing chapters**/

let chapters = [
  "Once upon a time...",
  "there was a kingdom in peril.",
  "the prince set out on a journey to save it.",
  "he encountered many challenges along the way.",
  "in the end, he emerged victorious and saved the kingdom.",
  "The End"
];

/** Controlling which chapter we are on **/

let currentChapter = 0;

function nextChapter() {
  if (currentChapter === chapters.length - 1) {
    document.getElementById("Changing").style.display = "none";
  } else {
    currentChapter++;
    document.querySelector("#story").innerHTML = chapters[currentChapter];
  }
}
function resetChapter(){
    currentChapter = 0;
    document.querySelector("#story").innerHTML = "Once upon a time";
    document.getElementById("Changing").style.display = "block";
}
</script>

  


<!-- Some easy HTML -->

<main>
  <header>Welcome to Telltale</header>
  <p class="adventure" id="story">{currentChapter}</p>
  <img id="picture" src={images[currentChapter][0]} alt={images[currentChapter][1]}>
  <div>
    <div class="button">
      <button id="Changing" on:click={nextChapter}>Next Chapter</button>
    </div>
    <div class="button">
      <button on:click={resetChapter}>Reset</button>
    </div>
  </div>
</main>

<!-- Styling website -->

<style>
header{
  font-style:oblique;
  font-weight: bolder;
  font-size: 30px;
  display: flex;
  justify-content: center;
}

.adventure{
  display: flex;
  justify-content: center;
  align-items: center;
}

div{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

main{
  height: 93vh;
  border-style: dotted;
  border-color: blue;

}

img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 800px;
  max-width: 800px;
  height: 60vh;

}

.button{
  margin-top: 50px;
  justify-content: space-around;
  width: 250px;
  height:auto;
  display:inline-block;
}

@media only screen and (max-width: 767px){
    main{
      background-size: contain;
    }
}


</style>