#!/usr/bin/env deno run --allow-write
import { variants } from "https://esm.sh/@catppuccin/palette@0.1.5";

for (let [flavour, colors] of Object.entries(variants)) {
  const isLatte = flavour === "latte";
  colors = Object.fromEntries(
    Object.entries(colors).map(([key, value]) => [key, value.hex])
  );

  const theme = {
    sidebarBg: colors.mantle,
    sidebarText: colors.text,
    sidebarUnreadText: colors.green,
    sidebarTextHoverBg: colors.overlay0,
    sidebarTextActiveBorder: colors.overlay0,
    sidebarTextActiveColor: colors.base,
    sidebarHeaderBg: colors.crust,
    sidebarHeaderTextColor: colors.text,
    onlineIndicator: colors.green,
    mentionBg: colors.pink,
    awayIndicator: colors.peach,
    dndIndicator: colors.red,
    mentionBj: colors.crust,
    mentionColor: colors.crust,
    centerChannelBg: colors.base,
    centerChannelColor: colors.subtext0,
    newMessageSeparator: colors.red,
    linkColor: colors.rosewater,
    buttonBg: colors.blue,
    buttonColor: colors.base,
    errorTextColor: colors.red,
    mentionHighlightBg: colors.mantle,
    mentionHighlightLink: colors.rosewater,
    codeTheme: isLatte ? "GitHub" : "Monokai",
    sidebarTeamBarBg: colors.crust,
  };
  console.log([flavour, "\n", JSON.stringify(theme, null, 0)].join(""));
}
