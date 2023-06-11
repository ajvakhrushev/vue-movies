<template>
  <header>
    <nav>
      <router-link to="/movies">Movies</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  <footer></footer>
</template>

<style scoped lang="scss">
header {
  height: 8vh;
  background: #04aa6d;

  nav {
    display: flex;
    padding: 0 4vw;
    height: 8vh;
    line-height: 8vh;

    a {
      margin: 0 0 0 2vw;
      font-size: 2.5vh;
      text-decoration: none;
      color: #fff;
      transition: color 0.25s ease-in-out 0s !important;

      &:focus,
      &:active,
      &:visited {
        text-decoration: none;
        color: #fff;
      }

      &:hover {
        color: #d5d5d5;
      }

      &:first-child {
        margin-left: 0;
      }
    }
  }
}

main {
  height: calc(100% - 16vh);
  overflow: hidden;
}

footer {
  display: flex;
  height: 8vh;
  background: #04aa6d;
  color: #fff;
}
</style>
