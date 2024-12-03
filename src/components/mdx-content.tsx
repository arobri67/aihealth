import { JSX } from "react";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const Code = ({ children, ...props }: any) => {
//   const codeHTML = highlight(children);
//   return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
// };

// const components = {
//   code: Code,
//   Counter,
// };

const MDXContent = (props: JSX.IntrinsicAttributes & MDXRemoteProps) => {
  return <MDXRemote {...props} components={{ ...(props.components || {}) }} />;
};

export default MDXContent;

//TODO: delete this file if not used
