<!--
	JS
-->
<script>
    import { bubble } from "svelte/internal";
    import Letter from "./Letter.svelte";

	//Variables


	let personName = "", age = "", story = "", name = "";

	//List of name, age and story
	let notes = []
	
	//Function for changes to call in HTML
	function form(){
		if (personName == ""){
            alert("Please type a friend's Name")
			return;
        }else if (age == ""){
			alert("Please type friend's Age")
			return;
		}else if (story == ""){
			alert("Please type a Meaningful Background Story")
			return;
		}else if (name == ""){
			alert("Please type your Name")
			return;
		}

		notes.push({personName:personName,name:name,age:age,story:story})
		notes=notes;
		console.log(notes)
	
		name = "", age = "", story = "", friendName = "";
	}
</script>

<!--
	Setting up title
-->
<title>Send Birthday Letter</title>
<!--
	Main <div>
-->
<div class="main">
	{#each notes as note}
		<div class="letterContainer">
			<div class="letterStyle">
				<Letter {note}></Letter>
			</div>
		</div>
	{/each}

	<div>
		<!--
			I like using fieldsets because I feel they are easier to use for filling up forms or inputs.
		-->
		<fieldset>
			<div class="input">
				<!--
					Input for taking in name, age and a meaningful story
				-->
				<input type="text" bind:value={personName} placeholder="Person's Name">
				<input type="text" bind:value={age} placeholder="Person's Age">
				<input type="text" bind:value={story} placeholder="Meaningful Background Story">
				<input type="text" bind:value={name} placeholder="Your Name">
			</div>
			<!--
				Button for confirming changes to Birthday letters
			-->
			<button on:click={form} class="confirming">Confirm</button>
		</fieldset>
	</div>
</div>
<!--
	Styling
-->
<style>
	.main{
		display: flex;
		flex-direction: column;
  		justify-content: center;
  		align-items: center;
		margin-top: -10px;
		overflow: auto;
	}
	fieldset{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: fit-content;
		width: fit-content;
		max-height: 700px;
		max-width: 700px;
		overflow-x: hidden;
		overflow-y: auto;
		margin-top: 10px;
		background-color: #89CFF0;
		border: outset blue 3px;
		border-radius: 15px;
	}
	.confirming{
		height: 50px;
		width: 100px;
	}
	.input{
		display: flex;
		flex-direction: column;
		padding-top: 10px;
	}
	input{
		margin: 5px;
		height: 30px;
		font-size: 20px;
		width: 500px;
	}
	.letterContainer{
		display: flex;
		border: outset blue 3px;
		border-radius: 20px;
		background-color: #89CFF0;
		justify-content: center;
		margin-top: 0;
	}
	.letterStyle{
		max-width: 700px;
		padding: 50px 50px 100px 100px;
		height: 77.6vh;
		max-height: 77.6vh;
		overflow: auto;
	}
</style>
<svelte:head>
	<style>
		body{
			background-image: url("BalloonGif.gif");
			background-color: cyan;
		}
		
	</style>
</svelte:head>