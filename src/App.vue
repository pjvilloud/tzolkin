<template>
  <div id="app">

    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>
        <router-link to="/" class="navbar-brand">Tzol'kin</router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/count" class="nav-link">Numérotation maya</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/dreamSpell" class="nav-link">Onde enchantée</router-link>
          </b-nav-item>
        </b-navbar-nav>
          <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item right>
            <a href="https://github.com/pjvilloud/tzolkin" class="nav-link" target="_blank"><font-awesome-icon icon="code-branch"/></a>
          </b-nav-item>
          <b-nav-item right>
            <router-link to="/about" class="nav-link">Crédits</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<style lang="scss">

</style>
