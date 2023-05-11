<!-- JavaScript here -->
<script>
    let i = 0;
    function add(){
        i +=1;
    }

    function removeAdded(){
        i = 0;
    }    

</script>

  
<!-- HTML code here -->

<title>Clicker</title>
<main class="centering">
    <header>Sponge Clicker</header>
    <div>
        <button class="adding" type="button" on:click={add}>Add</button>
        <p>ClickCount: {i}</p>
        <button class="removing" type="button" on:click={removeAdded}>Reset</button>
    </div>
</main>

<!--  -->
<style>
header{
    font-family: serif;
    text-shadow: 1px 1px white;
    font-weight: bolder;
 
    
}

.adding {
    height: 150px;
    width: 150px;
    background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d27o815-7aeda6bb-34bd-4dcd-ada6-c6e27fbade16.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmNGJkN2E2LWY3NjMtNDUxOC05YjgxLWJkZmQ0MGNlM2ZjOVwvZDI3bzgxNS03YWVkYTZiYi0zNGJkLTRkY2QtYWRhNi1jNmUyN2ZiYWRlMTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lavjAxx0egYbhZ7Bdzb2aWtfcAp5dPYotjktC0bLF0M");
    border: 3px solid white;
    border-radius: 15%;
    border-style:solid;
    }

.removing{
    height: 40px;
    width: 100px;
    border: 3px solid white;
    border-radius: 10px;
    border-style:solid;
    margin-left: 28px;
    padding: 0px;
}



p{
    font-family: serif;
    text-shadow: 1px 1px white;
    font-weight: bolder;
    font-size: 20px;
    margin-left: 9%;
}

.centering{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url(https://assets.teenvogue.com/photos/5ee62d2e4608f0989818a8a5/16:9/w_2560%2Cc_limit/MSDSPSQ_EC009.jpg);
    background-size: cover;
}

@media only screen and (max-width: 767px){
    .centering{
        background-size: contain;
    }

}

main{
    overflow: hidden;
}

</style>

<svelte:head>
	<style>
		body{
			background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
			background-size: 400% 400%;
			animation: gradient 30s ease infinite;
			height: 100vh;
		}
		@keyframes gradient {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
		
	</style>
</svelte:head>

