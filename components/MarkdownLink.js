import Link from 'next/link';

// set up link handling for links passed through contentful into react-markdown npm package
const MarkdownLink = ({ href, children }) => {
  return href.includes('http') ? (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  ) : (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export default MarkdownLink;
