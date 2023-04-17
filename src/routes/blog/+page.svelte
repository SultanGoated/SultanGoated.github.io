<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1>Blog</h1>

<main>
  <article>
    <ul class="list">
      {#each data.posts as post}
        <li>
          <h2>
            <a href={"/blog/"+post.path}>
              {post.meta.title}
            </a>
          </h2>
          
        </li>
      {/each}
    </ul>
  </article>
  <p>
    Published: 2023-04-03
  </p>
</main>

<style>
  main{
    display: grid;
    position: absolute;
    bottom: 2px;
    font-family: sans-serif;
  }
  
  article{
    padding-bottom: 0px;
    margin: 15px;
    background-color:dimgray;
  }

  .list{
    display: flex;
    gap: 150px;
  }

  h2{
    margin-bottom: 0px;
  }
</style>