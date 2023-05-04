<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>



<main>
  <h1>Blog</h1>
  <div>
    <article class="article">
      <ul class="list">
        {#each data.posts as post}
          <li class="icons">
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
      <b>Published:</b> 2023-04-03
    </p>
  </div>  
</main>

<style>

  div{
    display: grid;
    place-content: center;
    bottom: 2px;
    font-family: sans-serif;
  }
  
  .article{
    padding-bottom: 0px;
    margin: 15px;
  }

  .list{
    display: flex;
    gap: 100px;
  }

  h2{
    margin-bottom: 0px;
  }

  .icons:hover{
    color: #4d9559;
    transform: translateY(-5px);
  }

  main{
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    background-color: white;
    margin: 3rem 6rem;
    border-radius:  20px;
    border: 5px outset red;
  }
</style>