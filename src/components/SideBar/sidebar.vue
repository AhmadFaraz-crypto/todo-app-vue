<template>
  <Wrapper class="app-bar-width">
    <div class="pt-3 d-flex flex-column h-100">
      <Button
        @click="setPath('/web-task')"
        :variant="pathname === '/web-task' ? 'secondary' : 'transparent'"
        size="sm"
        class="d-flex mt-4 side-bar-btn"
      >
        <img ref="noteImage" class="text" /> Task
      </Button>
      <Button
        @click="setPath('/web-location')"
        :variant="pathname === '/web-location' ? 'secondary' : 'transparent'"
        size="sm"
        class="d-flex mt-4 side-bar-btn"
      >
        <img ref="locationImage" class="text" /> Location
      </Button>

      <Button
        variant="transparent"
        size="sm"
        class="d-flex mt-auto mb-5 side-bar-btn"
        @click="$router.push({ path: '/' })"
      >
        <span class="text">
          <img src="../../assets/logout.svg" alt="logout" />
        </span>
        Logout
      </Button>
    </div>
  </Wrapper>
</template>

<script src="./sidebar.js" />
