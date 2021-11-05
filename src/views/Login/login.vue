<template>
  <Wrapper>
    <form @submit.prevent="submit">
    <h1>Login</h1>
      <div class="flex justify-center">
        <div class="input-field mb-3">
          <input type="text" class="input" placeholder="Name" v-model="form.name" />
        </div>
        <div class="input-field mb-3">
          <input type="email" class="input" placeholder="Email" v-model="form.email" />
        </div>
        <div
          class="input-field"
        >
          <span @click="showPassword">{{ btnText }}</span>
          <input :type="type" class="input" placeholder="Password" v-model="form.password" />
        </div>
      </div>
      <div class="text-center">
        <Button class="mt-5 w-100" variant="primary" size="rg" @click="$router.push({path: '/web-task'})">Submit</Button>
      </div>
    </form>
  </Wrapper>
</template>

<script src="./login.js" />
