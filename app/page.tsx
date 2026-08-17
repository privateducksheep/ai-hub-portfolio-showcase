'use client'

import { useState } from 'react'

const products = [
  { icon: '✦', name: 'Answer Studio', tag: 'Knowledge', color: '#ff7849', text: 'Find trusted answers across your organisation, with clear source links.' },
  { icon: '◎', name: 'Prompt Lab', tag: 'Productivity', color: '#18a999', text: 'Test, refine and save prompts for repeatable everyday workflows.' },
  { icon: '↗', name: 'Insight Lens', tag: 'Analytics', color: '#6c63ff', text: 'Turn complex feedback into themes your team can act on quickly.' },
  { icon: '◇', name: 'Doc Companion', tag: 'Writing', color: '#e7488a', text: 'Draft and improve clear documents while keeping people in control.' },
]

const stories = [
  { category: 'HOW WE WORK', title: 'From first prompt to reliable workflow', excerpt: 'A practical playbook for testing AI-assisted work before scaling it.', time: '5 min read', tone: 'coral' },
  { category: 'PRODUCT SPOTLIGHT', title: 'Making trusted knowledge easier to find', excerpt: 'How thoughtful information design can reduce search time and uncertainty.', time: '4 min read', tone: 'violet' },
  { category: 'FIELD NOTES', title: 'Five lessons from user testing', excerpt: 'What early feedback taught us about clarity, trust and useful defaults.', time: '6 min read', tone: 'teal' },
]

export default function Home() {
  const [query, setQuery] = useState('')
  const visibleProducts = products.filter((item) =>
    `${item.name} ${item.tag} ${item.text}`.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main>
      <div className="demo-note">Independent portfolio recreation · All names and data are fictional</div>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="AI Hub home"><span>AI</span> Hub</a>
        <div className="nav-links">
          <a href="#products">Products</a><a href="#stories">Stories</a><a href="#about">About</a>
        </div>
        <button className="avatar" aria-label="Demo profile">SL</button>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">YOUR GUIDE TO PRACTICAL AI</p>
          <h1>Discover what AI<br /><em>can do for you.</em></h1>
          <p className="lede">Explore useful tools, learn from real stories, and build the confidence to use AI thoughtfully at work.</p>
          <a className="primary" href="#products">Explore the hub <span>↓</span></a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="spark s1">✦</div><div className="spark s2">✧</div><div className="spark s3">✦</div>
          <div className="core"><span>AI</span><small>made useful</small></div>
          <div className="floating-card card-one"><b>24</b><span>ideas explored</span></div>
          <div className="floating-card card-two"><b>8 min</b><span>time saved</span></div>
        </div>
      </section>

      <section id="products" className="products-section">
        <div className="shell">
          <div className="section-head">
            <div><p className="eyebrow">TOOLS TO TRY</p><h2>Meet your AI toolkit</h2></div>
            <label className="search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tools" aria-label="Search tools" /></label>
          </div>
          <div className="product-grid">
            {visibleProducts.map((product) => (
              <article className="product-card" key={product.name} style={{ '--accent': product.color } as React.CSSProperties}>
                <div className="product-icon">{product.icon}</div><span className="tag">{product.tag}</span>
                <h3>{product.name}</h3><p>{product.text}</p><button>View product <span>↗</span></button>
              </article>
            ))}
          </div>
          {visibleProducts.length === 0 && <p className="empty">No tools match “{query}”. Try another search.</p>}
        </div>
      </section>

      <section id="stories" className="stories shell">
        <div className="section-head"><div><p className="eyebrow">WHAT'S HAPPENING</p><h2>Ideas from the community</h2></div><a href="#stories">View all stories →</a></div>
        <div className="story-grid">
          {stories.map((story, index) => <article className="story-card" key={story.title}>
            <div className={`story-art ${story.tone}`}><span>0{index + 1}</span><i>✦</i></div>
            <div className="story-body"><small>{story.category}</small><h3>{story.title}</h3><p>{story.excerpt}</p><footer><span>{story.time}</span><b>Read story ↗</b></footer></div>
          </article>)}
        </div>
      </section>

      <section id="about" className="about">
        <div className="shell about-inner"><p className="eyebrow">WHY THIS EXISTS</p><h2>AI feels more useful when<br />people learn together.</h2><p>This concept brings product discovery, practical guidance and community stories into one welcoming place.</p><a className="secondary" href="#top">Back to top ↑</a></div>
      </section>
      <footer className="footer shell"><a className="brand" href="#top"><span>AI</span> Hub</a><p>Portfolio recreation · Built with fictional content</p><p>© 2026</p></footer>
    </main>
  )
}
