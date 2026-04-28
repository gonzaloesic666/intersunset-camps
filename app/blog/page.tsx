import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import { getAllPosts, formatDate } from '@/lib/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog Monitor Camp USA',
  description:
    'Guías, consejos y toda la información sobre el programa Monitor Camp USA para universitarios españoles.',
  alternates: {
    canonical: 'https://camps.intersunsetcampus.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          background: 'var(--navy)',
          paddingTop: '72px',
        }}
      >
        <div className="section-wrap" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <span className="section-label">Blog</span>
          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.15,
              marginBottom: '12px',
            }}
          >
            Todo sobre Monitor Camp USA
          </h1>
          <p style={{ color: 'var(--gray-400)', fontSize: '18px', maxWidth: '560px' }}>
            Guías y consejos para tu experiencia en Estados Unidos
          </p>
        </div>
      </section>

      {/* Article grid */}
      <main style={{ background: 'var(--gray-50)', padding: '64px 0 80px' }}>
        <div className="section-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <article
                  className="blog-card"
                  style={{
                    background: '#fff',
                    borderRadius: '16px',
                    padding: '28px',
                    boxShadow: '0 4px 24px rgba(30,29,72,0.08)',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                >
                  {/* Category badge */}
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
                      width: 'fit-content',
                    }}
                  >
                    {post.category}
                  </span>

                  {/* Title */}
                  <h2
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--gray-600)',
                      lineHeight: 1.6,
                      margin: 0,
                      flex: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {post.description}
                  </p>

                  {/* Footer */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '14px',
                      borderTop: '1px solid #F0F0F8',
                    }}
                  >
                    <span style={{ color: 'var(--gray-400)', fontSize: '13px' }}>
                      {formatDate(post.date)}
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        color: 'var(--gray-400)',
                        fontSize: '13px',
                      }}
                    >
                      <Clock size={13} strokeWidth={2} />
                      {post.readTime}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
