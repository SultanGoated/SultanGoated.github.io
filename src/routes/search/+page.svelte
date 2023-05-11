<!-- For each searchable category, create navigatable button -->

<title>search</title>
<div class="chat">
  <h1>Press any of the following categories to display their items</h1>
  <hr />
  <ul>
    {#each [["Users", "/users"], ["Address", "/addresses"], ["Banks", "/banks"], ["Appliances", "/appliances"], ["Beers", "/beers"], ["Blood Types", "/blood_types"], ["Credit Cards", "/credit_cards"]] as searchable}
      <li><a href={"/search" + searchable[1]}>{searchable[0]}</a></li>
    {/each}
  </ul>
</div>

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
