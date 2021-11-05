import { Wrapper } from "./style";
import Reminder from "../../components/Reminder/reminder.vue";
import { Button } from "../../components/Button/style";

export default {
  components: {
    Wrapper,
    Reminder,
    Button,
  },
  data() {
    return {
      inCompleteData: [
        {
          text: "Submit my resume",
          time: "Today, 17.00",
        },
        {
          text: "Submit my resume",
          time: "Today, 17.00",
        },
        {
          text: "Submit my resume",
          time: "Today, 17.00",
        },
        {
          text: "Submit my resume",
          time: "Today, 17.00",
        },
        {
          text: "Submit my resume",
          time: "Today, 17.00",
        },
      ],
      status: false,
    };
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    checkedStatus() {
      if (this.status) {
        this.status = false;
      } else {
        this.status = true;
      }
    },
  },
};