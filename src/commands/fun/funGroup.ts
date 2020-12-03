import { matchAlways } from "@enitoni/gears"
import { CommandGroup } from "@enitoni/gears-discordjs"
import { chooseCommand } from "./choose"
import { cumCommand } from "./cum"
import { redditGoldCommand } from "./redditGold"

export const funCommandGroup = new CommandGroup()
  .match(matchAlways())
  .setCommands(cumCommand, redditGoldCommand, chooseCommand)
