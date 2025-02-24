import { Extension } from "@tiptap/core"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import { all, createLowlight } from "lowlight"

const lowlight = createLowlight(all)

export const CodeBlock = Extension.create({
  name: "codeBlockLowlight",
  addExtensions() {
    return [
      CodeBlockLowlight.configure({ lowlight, defaultLanguage: "plaintext" }),
    ]
  },
})
