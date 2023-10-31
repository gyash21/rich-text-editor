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
        
    })
}