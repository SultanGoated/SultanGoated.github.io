<header>
	<h1 class="welcome">Welcome To My website</h1>
</header>
<main>
	
</main>

<style>
	.welcome{
		margin: 1rem;
		text-align: center;
		color: gold;
	}

	@media screen and (max-width: 768px){
		.welcome{
			font-size: 1.5rem;
			transition: 0.2s;
		}
	}
	@media screen and (max-width: 338px){
		.welcome{
			font-size: 1rem;
			transition: 0.2s;
		}
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