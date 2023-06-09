<script>
  let toggled = false

  let toggleMenu = () => {
    toggled = !toggled
  }
</script>


<header>
  <a href="/" class="logo"><i class="ri-home-4-line"></i><h1 class="dev"> Dev</h1><h1 class="sultan">Sultan</h1></a>

  <ul class:open={toggled} class="navbar">
    <li><a href="/" class="active">Home</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/SendBirthdayLetters">Send A Birthday Letter</a></li>
    <li><a href="/ElizaChatBot">Chat Bot</a></li>
    <li><a href="/telltale">Telltale</a></li>
    <li><a href="/search">Search</a></li>
    <li><a href="/memory">Memory</a></li>
    <li><a href="/clicker">Clicker</a></li>
    <li><a href="/todolist">To Do List</a></li>
    <li><a href="/sooriSpecial">Soori only </a></li>
  </ul>

  <div class="main">
    <a href="" class="user"><i class="ri-user-3-fill"></i>Sign In</a>
    <a href="">Register</a>
    <div class:bx-x={toggled}  class="bx bx-menu" id="menu-icon" on:click={toggleMenu}  on:keypress={toggleMenu} ></div>
  </div>
</header>

<slot></slot>

<style>
*{
  padding: 0;
  margin: 0 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  list-style: none;
}

:root{
  --bg-color: #222327;
  --text-color: #fff;
  --main-color: #29fd53;
}

.dev{
  color: var(--main-color);
  padding-right: 3px;
  padding-left: 3px;
}

.sultan{
  color: white;
  padding-right: 3px;
}

header{
  position: fixed;
  width: 100%;
  top: 0;
  background-color: darkgrey;
  height: 70px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #222327;
  padding: 28px 40px;
  transition: all 0.5s ease;
  border: 3px outset var(--main-color);
  border-top: none;
  border-right: none;
  border-left: none;
}

.logo{
  display: flex;
  align-items: center;
}

.logo i{
  color: var(--main-color);
  font-size: 28px;
  margin-right: 3px;
}

.logo span{
  color: var(--text-color);
  font-size: 1.7rem;
  font-weight: 600;

}

.navbar{
  display: flex;
}

.navbar a{
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 500;
  padding: 5px 0;
  margin: 0 30px;
  transition: all 0.5s ease;
}

.navbar a:hover{
  color: var(--main-color);
}

.navbar a.active{
  color: var(--main-color);
}

.main{
  display: flex;
  align-items: center;
}

.main a{
  margin-right: 25px;
  margin-left: 10px;
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.5s ease;
}

.user{
  display: flex;
  align-items: center;
}

.user i{
  color: var(--main-color);
  font-size: 28px;
  margin-right: 7px;
}

.main a:hover{
  color: var(--main-color);
}

#menu-icon{
  font-size: 35px;
  color: var(--text-color);
  cursor: pointer;
  z-index: 10001;
  display: none;
}

@media (max-width: 1660px){
  header{
    padding: 14px 20px;
    transition: 0.2s;
  }
  .navbar a{
    padding: 5px 0;
    margin: 0px 20px;
  }
}

@media (max-width: 1500px){
  #menu-icon{
    display: block;
  }
  .navbar{
    position: absolute;
    top: 100%;
    right: -100%;
    width: 270px;
    height: fit-content;
    background: var(--main-color);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    transition: all 0.5s ease;
  }
  .navbar a{
    display: block;
    margin: 12px 0;
    padding: 0px 25px;
    transition: all 0.5s ease;
  }
  .navbar a:hover{
    color: var(--text-color);
    transform: translateY(5px);
  }
  .navbar a.active{
    color: var(--text-color);
  }
  .navbar.open{
    right: 2%;
  }
}

@media (max-width: 500px){
  #menu-icon{
    display: block;
  }



  header{
    width: 100%;
    height: 60px;
  }

  .logo i, .logo h1{
    font-size: 20px;
  }

  .main a{
    font-size: 0.7rem;
  }

  .main a i{
    font-size: 0.9rem;
  }

  .navbar{
    position: absolute;
    top: 100%;
    right: -100%;
    width: 270px;
    height: fit-content;
    background: var(--main-color);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    transition: all 0.5s ease;
  }
  .navbar a{
    display: block;
    margin: 8px 0;
    padding: 0px 25px;
    transition: all 0.5s ease;
  }
  .navbar a:hover{
    color: var(--text-color);
    transform: translateY(5px);
  }
  .navbar a.active{
    color: var(--text-color);
  }
  .navbar.open{
    right: 1%;
  }
}
</style>

