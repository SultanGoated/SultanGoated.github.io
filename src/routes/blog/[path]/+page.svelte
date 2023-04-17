<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<article>
  <h1>{data.title}</h1>
  <p><b>Published:</b> {data.date}</p>
  <svelte:component this={data.content} />
</article>

<style>
  article{
    font-family: sans-serif;
    background-color: midnightblue;
  }
  </style>