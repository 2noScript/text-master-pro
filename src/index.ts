import { rm_hooks } from "./types/hooks";
import * as remove from "./utils/remove";

const textMaster = (str: string) => {
  return {
    remove: (use_list: rm_hooks[]) => {
      let txt = str;
      use_list.forEach((use) => {
        switch (use) {
          case "vietnamese_Accent":
            txt = remove.removeVietnameseAccent(txt);
          case "Space":
            txt = remove.removeSpace(txt);
          case "Number":
            txt = remove.removeNumber(txt);
          case "Special_Characters":
            txt = remove.removeSpecialCharacters(txt);
        }
      });
      return txt;
    },
  };
};

export default textMaster;