<template>
  <Wrapper>
    <p class="add-new-task">+ Check In</p>
    <p class="pt-3 pl-2 add-new-task">Current Location</p>
    <div class="d-flex">
      <img
        src="../../assets/location.png"
        alt="location"
        width="24"
        height="23"
      />
      <p class="mb-0 submit-resume">Pustegränd, Stockholm, SE</p>
    </div>
    <p class="area">59.3293° N, 18.0686° E</p>
    <p class="pt-3 pl-2 add-new-task">Previous Location</p>
    <div v-for="(e, index) in locationData" :key="index">
    <div class="d-flex">
      <img
        src="../../assets/location.png"
        alt="location"
        width="24"
        height="23"
      />
      <p class="mb-0 submit-resume">{{ e.name }}</p>
    </div>
    <p class="area">{{ e.area }}</p>
    </div>
  </Wrapper>
</template>

<script src="./webLocation.js" />
