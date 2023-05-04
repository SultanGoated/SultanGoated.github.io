<script>
    import { enhance } from "$app/forms";
    import "elizabot";
    import ElizaBot from "elizabot";
    let eliza = new ElizaBot();
    let chat = [{ user: "eliza", text: eliza.getInitial() }];
     function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function write(message) {
      console.log(message);
      chat.push({user: "user", text: message});
      chat = chat
      await sleep(Math.floor(Math.random() * 500) + 500)
      chat.push({user: "eliza", text: eliza.transform(message)})
      console.log(chat)
      chat = chat
      return chat;
    }
  </script>
  

  
  <main>
    <div class="container">
      <h1>Chat with Eliza</h1>
      <div class="scrollable">
        <div class="chat">
        <!-- TODO: loop over the messages and display them -->
          {#each chat as message}
          <article  
            class:user={message.user === "user"}
            class:eliza={message.user === "eliza"}
          >
          <span>
            {message.text}
          </span>
          </article>

          {/each}
        </div>
      </div>
      <form  
        method="post"
        use:enhance={({ form, data, action, cancel }) => {
          /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
          cancel(); //don't post anything to server
          const text = data.get("text");
          write(text);
          action = "/ElizaChatBot"
    
          // TODO: reset the form using form.reset()
          form.reset()
        }}
      >
        <input type="text" name="text" placeholder="Chat..."/>
      </form>
    </div>
  </main>
  

  <style>
    .scrollable{
      max-height: 70vh;
      overflow-y: scroll;
    }
  </style>