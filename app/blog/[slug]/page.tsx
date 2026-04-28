import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug, getAllPosts, formatDate } from '@/lib/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CALENDLY = 'https://calendly.com/intersunsetcampus/intersunset-campus?back=1&m';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://camps.intersunsetcampus.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

const mdComponents = {
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2
      style={{
        fontSize: '24px',
        fontWeight: 700,
        color: 'var(--navy)',
        margin: '40px 0 16px',
        lineHeight: 1.3,
      }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3
      style={{
        fontSize: '20px',
        fontWeight: 600,
        color: 'var(--navy)',
        margin: '32px 0 12px',
        lineHeight: 1.35,
      }}
    >
      {children}
    </h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p
      style={{
        fontSize: '16px',
        lineHeight: 1.8,
        color: '#3D3B6B',
        marginBottom: '20px',
      }}
    >
      {children}
    </p>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>{children}</strong>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul style={{ margin: '16px 0 20px', paddingLeft: '24px' }}>{children}</ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol style={{ margin: '16px 0 20px', paddingLeft: '24px' }}>{children}</ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li
      style={{
        fontSize: '16px',
        lineHeight: 1.7,
        marginBottom: '8px',
        color: '#3D3B6B',
      }}
    >
      {children}
    </li>
  ),
  table: ({ children }: { children?: React.ReactNode }) => (
    <div style={{ overflowX: 'auto', margin: '24px 0' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>{children}</table>
    </div>
  ),
  th: ({ children }: { children?: React.ReactNode }) => (
    <th
      style={{
        background: 'var(--navy)',
        color: '#fff',
        padding: '12px 16px',
        textAlign: 'left',
        fontSize: '14px',
        fontWeight: 600,
      }}
    >
      {children}
    </th>
  ),
  td: ({ children }: { children?: React.ReactNode }) => (
    <td
      style={{
        padding: '12px 16px',
        borderBottom: '1px solid #E8E8F5',
        fontSize: '15px',
        color: '#3D3B6B',
      }}
    >
      {children}
    </td>
  ),
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: '72px', background: '#fff' }}>
        <div
          className="section-wrap"
          style={{ maxWidth: '760px', paddingTop: '48px', paddingBottom: '80px' }}
        >
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              marginBottom: '40px',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/"
              style={{ color: 'var(--orange)', textDecoration: 'none', fontWeight: 500 }}
            >
              Inicio
            </Link>
            <span style={{ color: 'var(--gray-400)' }}>/</span>
            <Link
              href="/blog"
              style={{ color: 'var(--orange)', textDecoration: 'none', fontWeight: 500 }}
            >
              Blog
            </Link>
            <span style={{ color: 'var(--gray-400)' }}>/</span>
            <span
              style={{
                color: 'var(--gray-600)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '280px',
              }}
            >
              {post.title}
            </span>
          </nav>

          {/* Article header */}
          <header style={{ marginBottom: '40px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(227,130,49,0.12)',
                color: 'var(--orange)',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                padding: '4px 12px',
                borderRadius: '20px',
                marginBottom: '16px',
              }}
            >
              {post.category}
            </span>

            <h1
              style={{
                fontSize: 'clamp(26px, 4vw, 36px)',
                fontWeight: 800,
                color: 'var(--navy)',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              {post.title}
            </h1>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                color: 'var(--gray-400)',
                fontSize: '14px',
              }}
            >
              <span>{formatDate(post.date)}</span>
              <span
                style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
              >
                <Clock size={14} strokeWidth={2} />
                {post.readTime} de lectura
              </span>
            </div>

            <div
              style={{
                width: '48px',
                height: '3px',
                background: 'var(--orange)',
                borderRadius: '2px',
                marginTop: '20px',
              }}
            />
          </header>

          {/* Markdown content */}
          <div>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={mdComponents as any}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* CTA box */}
          <div
            style={{
              background: 'var(--navy)',
              borderRadius: '16px',
              padding: '40px',
              textAlign: 'center',
              marginTop: '56px',
            }}
          >
            <h2
              style={{
                color: '#fff',
                fontSize: '24px',
                fontWeight: 700,
                marginBottom: '8px',
              }}
            >
              ¿Listo para dar el paso?
            </h2>
            <p style={{ color: 'var(--orange)', fontSize: '16px', marginBottom: '28px' }}>
              Reserva tu cita gratuita y te explicamos todo
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex' }}
            >
              Reservar cita gratuita →
            </a>
          </div>

          {/* Back to blog */}
          <div style={{ marginTop: '40px' }}>
            <Link
              href="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--gray-600)',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
                transition: 'color 0.18s',
              }}
            >
              <ArrowLeft size={16} strokeWidth={2} />
              Ver todos los artículos
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
