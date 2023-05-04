<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<main>
  <article>
    <h1>{data.title}</h1>
    <p><b>Published:</b> {data.date}</p>
    <svelte:component this={data.content} />
  </article>
</main>
<a class="back" href="/blog">Back</a>

<style>
  
  article{
    background-color: white;
    margin: 4rem 17rem;
    padding: 2rem 7rem;
    border-radius: 50px;
    font-family: sans-serif;
    max-height: 600px;
    overflow-y: auto;
    overflow-x: auto;
    text-align: center;
    border: 2px dotted red;
  }

  .back{
    color: white;
    font-family: sans-serif;
    size: 28px;
  }

  </style>

<svelte:head>
  <style>
    /* Default styles */
    body {
      background-image: linear-gradient(to bottom right, #34c5d0, #d1237e);
      background-image: linear-gradient(to bottom left, #d1237e, #34c5d0);
      background-size: 400% 400%;
      animation: gradient1 5s ease infinite alternate, gradient2 5s ease infinite alternate;
    }

    @keyframes gradient1 {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 100% 100%;
      }
    }

    @keyframes gradient2 {
      0% {
        background-position: 100% 0%;
      }
      100% {
        background-position: 0% 100%;
      }
    }
  </style>
</svelte:head>