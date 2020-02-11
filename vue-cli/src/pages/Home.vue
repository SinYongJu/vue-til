<template>
  <div id="Home">
    <h2>Home</h2>
    {{ msg }}
    <div>
        from: 
        to:
    </div>
    <strong>User List</strong>
    <ul>
      <li v-bind:key="user.id" v-for="user in computedUserInfo">
        <router-link v-bind:to="user.path" tag="div">
          <strong>{{ user.name }} <em v-show="user.isSpecial">특별행!</em></strong>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus amet distinctio iste.
            Mollitia commodi cumque ad esse corporis dolorem voluptas doloribus sequi deserunt fugit
            placeat, ipsa modi. Assumenda, ratione dolor!
          </p>
        </router-link>
      </li>
    </ul>
    <hr>
    <strong>nav List</strong>
    <br>
    <router-link to="/hello" tag="div">hello</router-link>
    <br>
    <router-link to="/about" tag="div">about</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
      console.log(this.$router)
    return {
      userInfo: [
        { id: 1, name: 'John', isSpecial: true },
        { id: 2, name: 'Rody' },
        { id: 3, name: 'Merl', isSpecial: true },
        { id: 4, name: 'Shawn' }
      ],
      from : this.$router
    }
  },
  computed : {
      computedUserInfo : function(){
          let userInfo = this.userInfo
          return userInfo ? userInfo.map(item =>{
            item.path = `/user/${item.id}`
              return item
          }) : []
      }
  },
  props: {
    msg: String
  }
}
</script>

<style>
#Home strong {
  display: block;
}
#Home ul {
  list-style: none;
  margin: 0;
  padding: 0 100px 100px;
}
#Home li {
  text-align: left;
  padding: 20px 0;
}
#Home li p {
  margin: 0;
}
#Home li em {
  display: inline-block;
  font-style: normal;
  color: red;
  padding: 5px 0 10px;
}
</style>
