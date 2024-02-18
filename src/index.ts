import { rm_hooks } from "./types/hooks";
import * as use from "./utils/uses";

export const textMaster = (str: string) => {
  return {
    uses: (use_list: rm_hooks[]) => {
      let txt = str;
      use_list.forEach((use_tag) => {
        switch (use_tag) {
          case "removeVietnameseDiacritics":
          case "removeSpace":
          case "removeNumber":
          case "removeSpecialCharacters":
            txt = use[use_tag](txt);
            break;
        }
      });
      return txt;
    },
  };
};

console.log(
  textMaster("xin chào việt nam @@@@").uses(["removeVietnameseDiacritics"])
);
