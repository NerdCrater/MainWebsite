import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function ServiceBody({ content }: { content: string }) {
  return (
    // <div className="prose prose-lg dark:prose-invert max-w-none [&>h2]:text-4xl [&>h3]:text-2xl [&>ul]:list-disc [&>ul]:ml-6 [&>p]:leading-relaxed">
    //   <ReactMarkdown remarkPlugins={[remarkGfm]}>
    //     {content}
    //   </ReactMarkdown>
    // </div>

   <div className="prose prose-neutral max-w-none">
  <ReactMarkdown
    components={{
      h2: ({ node, ...props }) => (
        <h2 className="text-2xl font-bold text-white mt-6 border-l-4 border-blue-500 pl-4">
          {props.children}
        </h2>
      ),
      h3: ({ node, ...props }) => (
        <h3 className="text-xl font-semibold text-white mt-5 pl-4">
          {props.children}
        </h3>
      ),
      p: ({ node, ...props }) => (
        <p className="text-white pl-6 mt-2">{props.children}</p>
      ),
      ul: ({ node, ...props }) => (
        <ul className="list-disc pl-10 text-white mt-2">{props.children}</ul>
      )
    }}
  >
    {content}
  </ReactMarkdown>
</div>


  )
}
