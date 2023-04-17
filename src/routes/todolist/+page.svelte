<!--
    JavaScript
-->
<script>
    let newToDo = "";
    let tasks = [];
    function addToDo(){
        if (newToDo == ""){
            alert("Please type in a task to add")
        }

        if (newToDo!=""){
            tasks.push({task:newToDo,done:false})
            tasks=tasks
        }
        newToDo = "";
        
        if (tasks > tasks[9]){
            alert("You can only add up to 10 tasks per day")
            tasks.pop({task:newToDo,done:false})
            tasks=tasks
        }

    }


</script>

  


<!--
    HTML
-->


<title>
    To Do List
</title>
<main>
    <body>
        <div>
            <h1 class="font">
                To Do List
            </h1>
            <fieldset class="font">
                <label for="to-do" id="to-do">
                    <input class="font" type="text" bind:value={newToDo} placeholder="To Do">

                    <button class="font" on:click={addToDo}>
                        add
                    </button>
                </label>
            </fieldset>
            <fieldset class="font">
                To Do Tasks
                {#each (tasks) as task, i}
                    {#if (task.done==false)}
                        <li class="font">
                            <button class="font" on:click={() => tasks[i].done=!tasks[i].done}  id="done" >Done</button>
                            {tasks[i].task}
                        </li>
                    {/if}
                {/each}
            </fieldset>
            <fieldset class="font">
                Done Tasks
                {#each (tasks) as task, i}
                    {#if (task.done==true)}
                        <li class="font">
                            <button class="font" on:click={() => tasks[i].done=!tasks[i].done}  id="done" >Undone</button>
                            {tasks[i].task}
                        </li>
                    {/if}
                {/each}
            </fieldset>
        </div>
        <fieldset class="support">
            <a class="font" href="https://www.paypal.com/paypalme/goatconnective">Donation</a>
            <h3>Contact via email: <p>sultanhaidari8520@gmail.com</p>
            </h3>
        </fieldset>
    </body>
</main>






<!--
    CSS
-->
<style>

main{
    margin:auto;
    text-align: center;
    background-color: gray;
    height: 100vh;
    overflow: auto;
}

body{
    align-items: center;
}

.font{
    font-family:cursive;
}

button{
    border-radius: 10px;
    border-style: outset;
    background-color: rgb(249, 232, 2);
    color: blueviolet;
    border-color: cyan;
}

input{
    background-color: gold;
    border-radius: 5px;
    border-color:lime;
    border-style: outset;
}

div{
    border-style: dashed;
    height: 650px;
    width: 550px;
    margin:auto;
    text-align: center;
    background-color: burlywood;
    border-color: rgb(0, 179, 255);
    margin-top: 64px;
}

fieldset{
    border-radius: 3px;
    border-style:initial;
}



.support{
    color: rgb(60, 5, 5);
    font-size: 12px;
}


</style>