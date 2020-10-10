import React,  {useState, useEffect} from 'react';
import './App.css';
import Editor from './components/Editor';

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [javascript, setJavaScript] = useState('')
  const [scrDoc, setSrcDoc] = useState('')

  useEffect(() => {

    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${javascript}</script>
        </body>
      </html>
      
      `)
    } , 250)

    return () => { clearTimeout(timeout) }
    
  }, [html, css, javascript])
  return (
    <div className="app">
      <div className="editors-wrapper">
          <Editor language='xml' displayName="HTML" value={html} onChange={setHtml} />
          <Editor language='css' displayName="CSS" value={css} onChange={setCss} />
          <Editor language='javascript' displayName="JS" value={javascript} onChange={setJavaScript} />
      </div>
      <div className="output-container"> 
          <iframe
            title="code-mirror"
            sandbox="allow-scripts"
            srcDoc={scrDoc}
            width="100%"
            height="100%"
            frameBorder="0"
          />
      </div>
    </div>
  );
}

export default App;
