<template>
  <div class="form">
    <label for="email">Email</label>
    <input type="email" id="email" v-model.trim="email" />
    <label for="password">Password</label>
    <input type="password" id="password" v-model.trim="password" />
    <button :disabled="!email && !password" class="login-btn" @click="login()">
      Login
    </button>
    <div v-if="error.length">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      allowedemail: "ayaan123@yahoo.com",
      allowedpassword: "1234",
      error: "",
    };
  },
  methods: {
    login() {
      if (
        this.email === this.allowedemail &&
        this.password === this.allowedpassword
      ) {
        localStorage.setItem("token", 123456);
        this.$router.push("/profile");
      } else {
        this.error = "Invalid Credentials";
        setTimeout(() => {
          this.error = "";
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
.form {
  padding: 10px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
}
.login-btn {
  margin-top: 10px;
  width: 120px;
  height: 40px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}
</style>