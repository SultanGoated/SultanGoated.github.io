<script>

</script>


<div class="card">
    <img src="https://cdn.pixabay.com/photo/2020/10/06/21/54/cake-5633461__480.png" alt="birthday" class="birthday">
    <div class="text">
      <h1>Happy Birthday!</h1>
      <p>Dear Soori, I want to start this letter by wishing you the happiest birthday of your life and I hope reach every goal you set for yourself</p>
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
    height: calc(100vh - 80px);
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
    overflow: hidden;
    color:#DCE35B;
}

@media only screen and (min-width: 1000px) {
    .card {
        flex-direction: row-reverse;
    }
    .card img.birthday {
        width: 60%;
        max-width: 50vw;
        max-height: unset;
        border-radius: 30px;
    }
}

@media only screen and (max-height: 640px) {
    .card {
        flex-direction: row-reverse;
    }
    .card img.birthday {
        width: 100%;
        max-width: 50vw;
        max-height: unset;
    }
}

img.birthday {
    max-height: 40vh;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.text {
    padding: 3em;
}
.text h1{
    font-family:cursive;
    font-size: 40px;
}
.space {
    height: 100px;
}
</style>