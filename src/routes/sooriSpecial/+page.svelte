<script>
    import Letter from "./letter.svx";
</script>

<embed src="onlymp3.to - Ali Molaei - Tavalod OFFICIAL AUDIO  علی مولایی - تولد-5MrEqxxHksc-256k-1654113275568.mp3" autostart="true" hidden="true" loop="true">
<div class="card">
    <img src="https://cdn.pixabay.com/photo/2020/10/06/21/54/cake-5633461__480.png" alt="birthday" class="birthday">
    <div class="text">
      <h1>Happy Birthday!</h1>
      <p><Letter></Letter></p>
      <p></p>
    </div>
    <div class="space"></div>
</div>

<style>

* {
  transition: all 0.2s ease-in-out;
}

:global(body) {
    background: #DCE35B; 
    background: -webkit-linear-gradient(to right, #45B649, #DCE35B); 
    background: linear-gradient(to right, #45B649, #DCE35B); 
    display: grid;
    place-items: center;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
}

.card {

    background: #12192c;
    border-radius: 30px;
    height: 85vh;
    width: 80vw;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    color:#DCE35B;
    overflow-y: auto;
    
}

@media only screen and (min-width: 1000px) {
    .card {
        flex-direction: row-reverse;
        }
    .card img.birthday {
        width: 60%;
        max-width: 50vw;
        max-height: 60vh;
        border-radius: 30px;
        object-fit: cover;

    }
}

@media only screen and (max-width: 640px) {
    .card {
        height: 50vh;
        padding-top: 300px;
        
    }

    .text{
        padding: 0em;
    }

    .card img.birthday {
        
        width: 100%;
        max-width: 50vw;
        max-height: 40vh;
        border-radius: 20px;
        object-fit: cover;
    }
}

@media only screen and (max-width: 500px){
    .card {
        height: 40vh;
        padding-top: 340px;
        width: 350px;
        max-width: 350px;
    }
}

img.birthday {

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.text {
    padding: 1em;
}
.text h1{
    font-family:cursive;
    font-size: 40px;
}
.space {
    height: 400px;
}
</style>

