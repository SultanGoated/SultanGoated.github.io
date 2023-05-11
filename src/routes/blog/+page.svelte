<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<title>blog</title>
<header>
  <h1>Blog</h1>
</header>
<main>
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
    font-size: 1.1rem;
    padding: 10px;
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

  p{
    font-size: 18px;
  }

  header {
    text-align: center;
    color: whitesmoke;
  }

  @media (max-width: 860px){
    .article {
      font-size: 0.8rem;
      transition: all 0.5s ease;
      padding: 8px;
    }
    p{
      font-size: 14px;
      transition: all .5s ease;
    }
  }
  @media (max-width: 730px){
    .article {
      font-size: 0.7rem;
      transition: all 0.5s ease;
      padding: 6px;
    }
    p{
      font-size: 14px;
      transition: all .5s ease;
    }
  }
  @media (max-width: 680px){
    .article {
      font-size: 0.5rem;
      transition: all 0.5s ease;
      padding: 5px;
    }
    p{
      font-size: 12px;
      transition: all .5s ease;
    }
  }
</style>