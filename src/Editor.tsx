import { CKEditor } from '@ckeditor/ckeditor5-react';
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
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';
import { useRef } from 'react';
import React from 'react';

interface Props {
  name?: string;
}

const Editor: React.FC<Props> = (props) => {
  const editorRef = useRef<CKEditor<ClassicEditor>>(null);

  const { name } = props;

  const onClick = () => {
    const editor = editorRef.current?.editor;
    console.log(editor?.getData());
  };

  return (
    <div>
      <h1>안녕하세요? {name}님, 텍스트편집기입니다.</h1>
      <button style={{ margin: 4 }} onClick={onClick}>
        버튼
      </button>
      <div>
        <CKEditor
          editor={ClassicEditor}
          ref={editorRef}
          config={{
            toolbar: {
              items: [
                'undo',
                'redo',
                '|',
                'bold',
                'italic',
                'mediaEmbed',
                'sourceEditing',
                'fontSize',
                'fontBackgroundColor',
                'fontColor',
                'fontFamily',
                'htmlEmbed',
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
            initialData: '',
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
};

export default Editor;
