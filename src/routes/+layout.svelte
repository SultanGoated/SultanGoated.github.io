<script>
  let active = false;
  let HomeStyle = "", BlogStyle = "", TellTaleStyle = "", ToDoListStyle = "", SearchStyle = "", MemoryStyle = "", ElizaChatBotStyle = "", ClickerStyle = "", ApiStyle = "";
  function onHomeClick() {
    HomeStyle = "forceHover";
    BlogStyle = "";
    TellTaleStyle = "";
    ToDoListStyle = "";
    SearchStyle = "";
    MemoryStyle = "";
    ElizaChatBotStyle = "";
    ClickerStyle = "";
    ApiStyle = "";
  }
  function onBlogClick() {
    HomeStyle = "";
    BlogStyle = "forceHover";
    TellTaleStyle = "";
    ToDoListStyle = "";
    SearchStyle = "";
    MemoryStyle = "";
    ElizaChatBotStyle = "";
    ClickerStyle = "";
    ApiStyle = "";
  }
  function onToDoListClick() {
    HomeStyle = "";
    BlogStyle = "";
    TellTaleStyle = "";
    ToDoListStyle = "forceHover";
    SearchStyle = "";
    MemoryStyle = "";
    ElizaChatBotStyle = "";
    ClickerStyle = "";
    ApiStyle = "";
  }
  function onTellTaleClick() {
    HomeStyle = "";
    BlogStyle = "";
    TellTaleStyle = "forceHover";
    ToDoListStyle = "";
    SearchStyle = "";
    MemoryStyle = "";
    ElizaChatBotStyle = "";
    ClickerStyle = "";
    ApiStyle = "";
  }
  function onSearchClick() {
    HomeStyle = "";
    BlogStyle = "";
    TellTaleStyle = "";
    ToDoListStyle = "";
    SearchStyle = "forceHover";
    MemoryStyle = "";
    ElizaChatBotStyle = "";
    ClickerStyle = "";
    ApiStyle = "";
  }
  function onClickerClick() {
    HomeStyle = "";
    BlogStyle = "";
    TellTaleStyle = "";
    ToDoListStyle = "";
    SearchStyle = "";
    MemoryStyle = "";
    ElizaChatBotStyle = "";
    ClickerStyle = "forceHover";
    ApiStyle = "";
  }
  function onMemoryClick() {
    HomeStyle = "";
    BlogStyle = "";
    TellTaleStyle = "";
    ToDoListStyle = "";
    SearchStyle = "";
    MemoryStyle = "forceHover";
    ElizaChatBotStyle = "";
    ClickerStyle = "";
    ApiStyle = "";
  }
  function onElizaChatBotClick() {
    HomeStyle = "";
    BlogStyle = "";
    TellTaleStyle = "";
    ToDoListStyle = "";
    SearchStyle = "";
    MemoryStyle = "";
    ElizaChatBotStyle = "forceHover";
    ClickerStyle = "";
    ApiStyle = "";
  }
</script>

<nav>
  <div class="container">
    <h1>Home</h1>
    <div class="menu">
      <a href="/" class={HomeStyle} on:click={onHomeClick}>Home</a>
      <a href="/blog" class={BlogStyle} on:click={onBlogClick}>Blog</a>
      <a href="/telltale" class={TellTaleStyle} on:click={onTellTaleClick}>TellTale</a>
      <a href="/ElizaChatBot" class={ElizaChatBotStyle} on:click={onElizaChatBotClick}>Eliza Chat Bot</a>
      <a href="/search" class={SearchStyle} on:click={onSearchClick}>Search</a>
      <a href="/clicker" class={ClickerStyle} on:click={onClickerClick}>Clicker</a>
      <a href="/memory" class={MemoryStyle} on:click={onMemoryClick}>Memory</a>
      <a href="/todolist" class={ToDoListStyle} on:click={onToDoListClick}>To Do List</a>
    </div>

    <button class="hamburger" class:active={active} on:click={() => {active = !active;}}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>

<hr />
<div class="scrollable">
  <slot />
</div>

<style>
  :root {
    --primary: #8c38ff;
    --light: #EEEEEE;
    --dark: #212121;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Fira sans", sans-serif;
  }

  .scrollable{
    overflow-y: auto;
    height: 100%;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: var(--dark);
    padding: 16px 32px;
    border-bottom: 3px solid var(--primary);
  }

  h1 {
    color: #fff;
    font-size: 28px;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .hamburger {
    display: block;
    position: relative;
    z-index: 1;
    user-select: none;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }

  .hamburger span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background-color: var(--light);
    border-radius: 6px;
    z-index: 1;
    transform-origin: 0 0;
    transition: 0.4s;
  }

  .hamburger:hover span:nth-child(2){
    transform: translateX(10px);
    background-color: var(--primary);
  }

  .hamburger.active span:nth-child(1) {
    transform: translate(0px, -2px) rotate(45deg);
  }

  .hamburger.active span:nth-child(2) {
    transform: translateX(10px);
    opacity: 0;
  }

  .hamburger.active span:nth-child(3) {
    transform: translate(-3px, 3px) rotate(-45deg);
  }

  .hamburger.active:hover span{
    background-color: var(--primary);
  }

  .menu {
    display: none;
    flex: 1 1 0%;
    justify-content: flex-end;
    margin: 0 -16px;
  }

  .menu a {
    color: #FFF;
    margin: 0 16px;
    font-weight: 600;
    text-decoration: none;
    transition: 0.4s;
    padding: 8px 16px;
    border-radius: 99px;
  }

  .menu a.active, .menu a:hover {
    background-color: var(--primary);
  }
  .forceHover {
    background-color: var(--primary) !important;
  }

  /* Update media query */
  @media (min-width: 1136px) {
    .hamburger{
      display: none;
    }

    .menu{
      display: flex;
      /* Change justify-content to flex-end */
      justify-content: flex-end;
    }
  }
</style>
