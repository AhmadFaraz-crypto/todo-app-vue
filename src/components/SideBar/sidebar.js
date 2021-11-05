import { Wrapper } from "./style";
import { Button } from "../Button/style";
import LocationActive from "../../assets/location_icon.svg";
import Location from "../../assets/location_white_icon.svg";
import NoteLocation from "../../assets/note_black_icon.svg";
import Note from "../../assets/note.svg";
export default {
  name: "SideBar",
  components: {
    Wrapper,
    Button,
  },
  data() {
    return {
      pathname: "",
    };
  },
  mounted() {
    this.$refs.noteImage.src =
      this.$router.history.current.path === "/web-task" ? Note : NoteLocation;
    this.$refs.locationImage.src =
      this.$router.history.current.path === "/web-location"
        ? Location
        : LocationActive;
    this.pathname = this.$router.history.current.path;
  },
  methods: {
    setPath(currentPath) {
      this.pathname = currentPath;
      if (currentPath === "/web-location") {
        this.$refs.locationImage.src = Location;
        this.$refs.noteImage.src = NoteLocation;
      } else if (currentPath === "/web-task") {
        this.$refs.locationImage.src = LocationActive;
        this.$refs.noteImage.src = Note;
      } else {
        return "";
      }
      this.$router.push({ path: currentPath });
    },
  },
};