<!--
	JS
-->
<script>
    import Letter from "./Letter.svx";

	//Variables

	let activity = true;
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

		notes.push({ id: Date.now(), personName: personName, name: name, age: age, story: story });
		notes=notes;
		console.log(notes)
	
		name = "", age = "", story = "", personName = "";
	}

	function toggleActivity(event) {
		const noteId = event.detail.noteId;
		notes = notes.filter(note => note.id !== noteId);
		activity = !activity;
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
	<!--
		After the user has used the input fieldset, the page will show the letter and the info that has been given for the letter.
	-->
	{#each notes as note}
		<div class="letterContainer">
			<div class="letterStyle">
				<Letter {note}></Letter>
			</div>
		</div>
		<button on:click={() => toggleActivity({ detail: { noteId: note.id } })} class="new_letter">Delete and rewrite</button>
	{/each}

	<div>
		<!--
			I like using fieldsets because I feel they are easier to use for filling up forms or inputs.
		-->
		<fieldset class:active={activity} class:inactive={!activity}>
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
			<button on:click={form} on:click={toggleActivity} class='confirming'>Confirm</button>
		</fieldset>
	</div>
	<div class="balloon-container">
		<img class="balloon" src="BalloonGif.gif" alt="Balloon 1">
		<img class="balloon" src="BalloonGif.gif" alt="Balloon 2">
	</div>
</div>
<!--
	Styling
-->
<style>
	*{
		font-family: 'Times New Roman', Times, serif;
	}
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
		border-radius: 10px;
		border-color: blue;
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
		border-radius: 10px;
		border-color: blue;
	}
	.letterContainer{
		display: flex;
		flex-direction: column;
		justify-content: center;
		place-content: center;
		align-items: center;
		border: outset blue 3px;
		border-radius: 20px;
		background-color: #89CFF0;
		justify-content: center;
		margin-top: 0;
	}
	.letterStyle{
		max-width: 700px;
		padding-top: 50px;
		padding-left: 100px;
		padding-right: 100px;
		padding-bottom: 0;
		height: 77vh;
		max-height: 77vh;
		overflow: auto;
	}
	.active{
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
		margin-top: 10rem;
	}
	.inactive{
		display: none;
	}
	.new_letter{
		font-size: 1.5rem;
		width: 200px;
		height: 50px;
		margin: 10px 10px;
		background-color: red;
		border-radius: 15px;
		color: mistyrose;
	}

</style>
<svelte:head>
	<style>
		body{
			background-color: cyan;
		}
		
	</style>
</svelte:head>