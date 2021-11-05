<template>
  <div>
    <Wrapper>
      <div class="d-flex justify-content-end reminder-noti">
        <Reminder />
      </div>
      <p class="add-new-task" @click="showModal">+ Add new task</p>
      <p class="pt-3 pl-2 add-new-task">Incomplete</p>
      <div v-for="(e, index) in inCompleteData" :key="index">
        <div class="d-flex">
          <div class="input-checkbox" @click="status = !status">
            <div
              :class="
                status
                  ? 'w-100 h-100 d-flex justify-content-center align-items-center'
                  : 'd-none'
              "
            >
              <img src="../../assets/Checkmark.svg" class="checked-icon" />
            </div>
          </div>
          <p class="mb-0 submit-resume">{{ e.text }}</p>
        </div>
        <div class="d-flex align-center">
          <img
            src="../../assets/clock.png"
            alt="clock"
            width="16"
            height="16"
          />
          <p class="date">{{ e.time }}</p>
        </div>
      </div>
      <p class="pt-3 pl-2 add-new-task">Completed</p>
      <div
        class="d-flex align-center mb-3"
        v-for="(e, index) in inCompleteData"
        :key="index"
      >
        <div class="input-checkbox" @click="status != status">
          <div
            :class="
              status
                ? 'w-100 h-100 d-flex justify-content-center align-items-center'
                : 'd-none'
            "
          >
            <img src="../../assets/Checkmark.svg" class="checked-icon" />
          </div>
        </div>
        <p class="mb-0 completed">{{ e.text }}</p>
      </div>
    </Wrapper>
    <div>
      <b-modal ref="my-modal" hide-footer hide-header centered>
        <h3 class="modal-title">New Task</h3>
        <div class="form-data">
          <div class="summary">
            <img
              src="../../assets/summary.svg"
              alt="summary"
              width="20"
              height="20"
              class="summary-icon"
            />
            <input placeholder="Summary" />
          </div>
          <div class="description">
            <img
              src="../../assets/description.svg"
              alt="dexcription"
              width="20"
              height="18"
              class="description-icon"
            />
            <textarea placeholder="Description" />
          </div>
          <div class="summary">
            <img
              src="../../assets/timmer.svg"
              alt="timmer"
              width="20"
              height="20"
              class="summary-icon"
            />
            <input placeholder="Due Date" type="text" />
          </div>
          <div class="w-100">
            <Button
              class="mt-5 d-flex btn save-btn"
              variant="secondary"
              size="rg"
              @click="hideModal"
            >
              Login
            </Button>
            <Button
              variant="transparent"
              class="mt-2 d-flex btn"
              size="rg"
              @click="hideModal"
            >
              cancel
            </Button>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script src="./webTask.js" />
