<script>
  import '../app.css'
</script>

<div class="main">

  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/">Home page</a></li>
          <li><a href="/clicker">Sponge Clicker</a></li>
          <li><a href="/todolist">ToDoList</a></li>
          <li><a href="/telltale">Telltale</a></li>
          <li><a href="/memory">Memory</a></li>
          <li><a href="/ElizaChatBot">Eliza Chat Bot</a></li>
          <li><a href="/search">Search</a></li>
          <li><a href="/blog">Blog</a></li>

          <li>
            <a
            target="_blank"
            href="https://github.com/SultanGoated/SultanGoated.github.io"
            >GitHub</a
          >
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl" href="/">Home Page</a>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <a href="/search">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </a>
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
    </div>
  </div>
<!--
  <div class="nav">
    <nav>
      <a href="/">Hem</a>
      <a href="/clicker">Sponge Clicker</a>
      <a href="/todolist">ToDoList</a>
      <a href="/telltale">Telltale</a>
      <a href="/memory">Memory</a>
      <a
        target="_blank"
        href="https://github.com/SultanGoated/SultanGoated.github.io"
        >GitHub</a
      >
    </nav>
    
  </div>
  
  -->
  <slot />
</div>

<style>

  .main {
    height:100vh;
  }

</style>
