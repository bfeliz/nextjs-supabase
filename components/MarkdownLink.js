import Link from 'next/link';

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
