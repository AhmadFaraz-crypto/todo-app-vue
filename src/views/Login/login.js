import { required, email, minLength } from "vuelidate/lib/validators";
import {Wrapper} from "./style";
import {Button} from "../../components/Button/style";

export default {
  name: "FormComponent",
  components:{
    Wrapper,
    Button,
  },

  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      type: "password",
      btnText: "Show", // eslint-disable-line no-mixed-spaces-and-tabs
    };
  },

  validations: {
    form: {
      name: { required, min: minLength(10) },
      email: { required, email },
      password: { required, min: minLength(10) },
    },
  },

  methods: {
    submit() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
    },
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.btnText = "Hide";
      } else {
        this.type = "password";
        this.btnText = "Show";
      }
    },
  },
};