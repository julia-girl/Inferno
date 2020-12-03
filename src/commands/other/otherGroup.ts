import { matchAlways } from "@enitoni/gears"
import { CommandGroup } from "@enitoni/gears-discordjs"
import { gitCommand } from "./git"

export const otherGroup = new CommandGroup()
  .match(matchAlways())
  .setCommands(gitCommand)
