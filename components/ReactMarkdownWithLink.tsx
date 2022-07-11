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
        a: ({ href, ...props }) =>
          href ? (
            <Link href={href}>
              <a {...props}></a>
            </Link>
          ) : (
            <a {...props} />
          ),
      }}
    />
  );
};
