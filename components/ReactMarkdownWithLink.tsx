import Link from "next/link";
import React from "react";
// import ReactMarkdown from "react-markdown";
import { MDXRemote } from "next-mdx-remote";
import { MarkdownResult } from "../types/utils";

export const ReactMarkdownWithLink = ({
  children,
}: {
  children: MarkdownResult;
}) => {
  return (
    <MDXRemote
      {...children}
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a {...props} />;
          } else if (
            (process.env.NEXT_PUBLIC_SERVER_ENDPOINT &&
              !href.includes(process.env.NEXT_PUBLIC_SERVER_ENDPOINT)) ||
            !href.startsWith("/")
          ) {
            return <a href={href} {...props} rel="noopener noreferrer"></a>;
          } else {
            return (
              <Link href={href}>
                <a {...props}></a>
              </Link>
            );
          }
        },
      }}
    />
  );
};
