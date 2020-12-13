import { matchAlways } from "@enitoni/gears"
import { CommandGroup } from "@enitoni/gears-discordjs"
import { toKeyCommand, toTextCommand } from "./cursed"

export const cursedGroup = new CommandGroup()
  .match(matchAlways())
  .setCommands(toKeyCommand, toTextCommand)
