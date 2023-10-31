"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export default function Tiptap ({

    description,
    onChange,
}:{
    description:string
    onChange: (richText: string) => void
}){

    const editor = useEditor({
        extensions: [StarterKit.configure()],
        content: description,
        editorProps:{
            attributes:{
                class: "rounded-md border md-h-[150px] border-input bg-background disabled:cursor-not-allowed disabled:opacity-50" 
            },
        },

        onUpdate({ editor }){
            onChange(editor.getHTML())
            console.log(editor.getHTML())
        },
    })
}