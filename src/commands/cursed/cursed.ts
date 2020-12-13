import { matchPrefixes } from "@enitoni/gears"
import { Command } from "@enitoni/gears-discordjs"

export const toKeyCommand = new Command()
  .match(matchPrefixes("tokey", "tk"))
  .use((context) => {
    const { message, content } = context

    const str = content
    let _keys: Array<Number> = []

    for (const char of str.split("")) _keys.push(char.charCodeAt(0))

    message.channel.send(_keys.join(" "))
  })

export const toTextCommand = new Command()
  .match(matchPrefixes("totext", "tt"))
  .use((context) => {
    const { message, content } = context

    let str: Array<string> = []
    const _keys = content.split(" ").map((n) => Number(n))

    for (const key of _keys) str.push(String.fromCharCode(key))

    message.channel.send(str.join(""))
  })
