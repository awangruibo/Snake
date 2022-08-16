<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" :to="{name : 'home'}">King Of Bots</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :class=" route_name === 'PkIndexView' ? 'nav-link active' : 'nav-link' " aria-current="page" :to = "{ name : 'PkIndexView'}">对战</router-link>
            </li>
            <li class="nav-item">
              <router-link :class="route_name === 'RecordIndexView' ? 'nav-link active' : 'nav-link'"  :to = "{ name : 'RecordIndexView'}">对局列表</router-link>
            </li>
            <li class="nav-item">
              <router-link :class="route_name == 'RanklistIndexView' ? 'nav-link active' : 'nav-link'"  :to = "{ name : 'RanklistIndexView'}">排行榜</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                wangruibo
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link class="dropdown-item"  :to = "{ name : 'UserBotIndexView'}">我的Bot</router-link>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li><router-link class="dropdown-item" :to = "{ name : 'PkIndexView'}">退出</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from "vue";

export default {
  setup(){
    const route = useRoute();
    let route_name = computed(() => route.name);

    return{
      route_name,
    }
  }
}

</script>

<style scoped>

</style>