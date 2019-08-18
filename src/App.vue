<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="navbar-brand">Tzol'kin</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/about" class="nav-link">Crédits</router-link>
        </li>
        <li class="nav-item">
          <a href="https://github.com/pjvilloud/tzolkin" class="nav-link" target="_blank">
            <font-awesome-icon icon="code-branch"/>
          </a>
        </li>
      </ul>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">

</style>
