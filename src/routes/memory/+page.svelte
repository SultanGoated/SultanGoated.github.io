<script>
  let cards = [];
  let imgList = ["https://imgs.search.brave.com/1or21G3QhzXgzQHE14T3GR3a6LgAeN3l7pp42X6b-ow/rs:fit:514:700:1/g:ce/aHR0cHM6Ly9jZG4u/YWNpZGNvdy5jb20v/cGljcy8yMDEzMDIy/MS93b25kZXJmdWxf/bmF0dXJlXzE3Lmpw/Zw", "https://imgs.search.brave.com/Zbk_s-72W_gewqiUvzRkjWOWvgX5JqDlobBrnMSRijM/rs:fit:1080:1200:1/g:ce/aHR0cHM6Ly90aGVk/b2dtYW4ubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzEx/L1NhbW95ZWQtNy0x/LmpwZz94NjA0MDk"];
  for (let index = 0; index < 2; index++) {
    cards.push({
      id: index, // TODO: unique ids per card card done
      img: imgList[index], // TODO: unique images per card card
      flipped: false,  // TODO: think
      completed: false,
    },
    { id: index+0.5, // TODO: unique ids per card card done
      img: imgList[index], // TODO: unique images per card card
      flipped: false,  // TODO: think
      completed: false,});
  }

  let cardNumber1;
  let cardNumber2;
  let flipcount = 0;


  function shuffleCards() {
    for (let i = 0; i < cards.length; i++) {
      let randomIndex = Math.floor(Math.random() * cards.length);
      let temp = cards[i];
      cards[i] = cards[randomIndex];
      cards[randomIndex] = temp;
    }
  }

  function flip(card) {
    // flip card over if two cards are not already flipped
    // TODO: and card is already not flipped
    if (!card.flipped && flipcount < 2) {
      card.flipped = true;
      flipcount++
      if (flipcount == 1){
        cardNumber1 = card.img;}
      if (flipcount == 2){
        cardNumber2 = card.img;}
      // TODO: Probably do what?
      // flip the cards over after 2s from seeing both cards
      if (flipcount == 2 && cardNumber1 == cardNumber2){
        cards.forEach((card) => { 
          card.completed = card.flipped;
        })
        flipcount = 0;
        cardNumber1 = '';
        cardNumber2 = '';
        cards = cards;
      }

      else if (flipcount == 2) {
        setTimeout(() => {
          // flip over cards that have not been marked as "completed"
          cards.forEach((card) => {
            card.flipped = card.completed;
          });
          flipcount = 0;
          cardNumber1 = '';
          cardNumber2 = '';
          cards = cards;
        }, 2000);
      }
      
      cards = cards;
    } else {
      alert("chill");
    }
  }
</script>



<main>
  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="https://imgs.search.brave.com/6ho8W9hwB7PuTpw0eszWWDoMBpaso6EjAil7qULEW0w/rs:fit:400:300:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzQxNTUv/c2NyZWVuc2hvdHMv/MjU1NjAzL2ZsaXAu/cG5n" alt="" />
      </div>

    {/each}
    <button class="shuffling" on:click={shuffleCards}>Shuffle</button>
  </div>
</main>

<style>
  main {
    margin-top: 0px;
    display: flex;
    place-content: center;
    place-items: center;
    height: 100vh;
    background-color: chocolate;
  }
  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 100px);
    grid-template-rows: repeat(2, 100px);
  }
  .card {
    border: 1px solid black;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }
  .card.flipped {
    transform: rotateY(180deg);
  }
  .card .back {
    transform: rotateY(0deg);
  }
  .card .front {
    transform: rotateY(180deg);
  }
  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
  }

  button{
    background-color: blueviolet;
  }
</style>