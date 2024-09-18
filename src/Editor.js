import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Paragraph,
  Mention,
  Undo,
  MediaEmbed,
  SourceEditing,
  FontSize,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  HtmlEmbed,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";
import { useRef } from "react";

function Editor() {
  const editorRef = useRef(null);

  const click = () => {
    /**
     * @type {ClassicEditor}
     */
    const editor = editorRef.current.editor;
    console.log(editor.getData());
  };

  return (
    <div>
      <h1>안녕하세요? 텍스트편집기입니다.</h1>
      <button style={{ margin: 4 }} onClick={click}>
        버튼
      </button>
      <div>
        <CKEditor
          editor={ClassicEditor}
          ref={editorRef}
          style={{ height: "300px", minHeight: "200px", maxHeight: "500px" }}
          config={{
            toolbar: {
              items: [
                "undo",
                "redo",
                "|",
                "bold",
                "italic",
                "mediaEmbed",
                "sourceEditing",
                "fontSize",
                "fontBackgroundColor",
                "fontColor",
                "fontFamily",
                "htmlEmbed",
              ],
            },
            plugins: [
              Bold,
              Essentials,
              Italic,
              Mention,
              Paragraph,
              Undo,
              MediaEmbed,
              SourceEditing,
              FontSize,
              FontBackgroundColor,
              FontColor,
              FontFamily,
              HtmlEmbed,
            ],
            mention: {
              // Mention configuration
            },
            initialData: "",
            mediaEmbed: {
              previewsInData: true,
            },
            htmlEmbed: {
              showPreviews: true,
            },
          }}
        />
      </div>
    </div>
  );
}

export default Editor;
