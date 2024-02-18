import { uses_hooks } from "./types/hooks";
import * as use from "./utils/uses";

export const textMaster = (str: string) => {
  return {
    uses: (use_list: uses_hooks[]) => {
      let txt = str;
      use_list.forEach((use_tag) => {
        switch (use_tag) {
          case "removeVietnameseDiacritics":
          case "removeSpace":
          case "removeNumber":
          case "removeSpecialCharacters":
          case "toLowerCase":
          case "toUpperCase":
            txt = use[use_tag](txt);
            break;
        }
      });
      return txt;
    },
  };
};

