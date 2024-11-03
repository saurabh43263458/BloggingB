import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';
import "./rtx.css"

export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='rtx'> 
    {label && <label className='Rte-label'>{label}</label>}
    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        
    <Editor
    apiKey='2wwmsu1gy41lnpfloft3oan3bbxv60uhn3beeccetwwuargy'
    init={{
      plugins: [
        "image",
        "advlist",
        "autolink",
        "lists",
        "link",
        "image",
        "charmap",
        "preview",
        "anchor",
        "searchreplace",
        "visualblocks",
        "code",
        "fullscreen",
        "insertdatetime",
        "media",
        "table",
        "code",
        "help",
        "wordcount",
        "anchor",
      ],
      toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
      }}
    initialValue='It a Saurabh Platform'
onEditorChange={onChange}
  />
    )}
    />
     </div>
  )
}