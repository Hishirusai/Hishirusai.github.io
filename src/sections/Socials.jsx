const Socials = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: 'mailto:Hishirusai@gmail.com',
      color: 'from-[#3A3A3A] via-[#242424] to-[#3A3A3A]',
      description: 'Hishirusai@gmail.com'
    },
    {
      name: 'Pixiv',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.184-.008-.376-.024-.576-.024-1.768 0-3.248 1.392-3.248 3.44 0 .328.08.64.184.936l-3.96-1.104c-.448-.128-.928-.192-1.416-.192-3.192 0-5.784 2.592-5.784 5.784s2.592 5.784 5.784 5.784c3.192 0 5.784-2.592 5.784-5.784 0-.128-.008-.256-.016-.384l4.768-1.328c.128-.032.248-.088.368-.144.088-.04.176-.088.256-.144.08-.056.152-.12.224-.184.072-.064.136-.136.2-.208.064-.072.12-.152.176-.232.056-.08.104-.168.152-.256.048-.088.088-.184.128-.28.04-.096.072-.192.104-.296.032-.104.056-.216.072-.328.016-.112.024-.224.024-.344 0-2.6-2.112-4.712-4.712-4.712z"/>
        </svg>
      ),
      url: 'https://pixiv.me/yourusername',
      color: 'from-[#3A3A3A] via-[#242424] to-[#3A3A3A]',
      description: 'View my art portfolio on Pixiv (Coming Soon)'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.987 11.987 11.987 6.621 0 11.987-5.366 11.987-11.987C24.014 5.367 18.648.001 12.017.001zM8.453 18.306c-2.14 0-3.874-1.735-3.874-3.874 0-2.14 1.734-3.874 3.874-3.874 2.14 0 3.874 1.734 3.874 3.874 0 2.139-1.734 3.874-3.874 3.874zm7.133-9.722c0 .698-.225 1.378-.644 1.939-.419.56-1.014.994-1.694 1.235-.681.24-1.425.275-2.123.099-.698-.177-1.338-.548-1.825-1.058-.488-.511-.834-1.162-.988-1.857-.154-.695-.104-1.434.142-2.107.246-.673.677-1.258 1.229-1.668.552-.41 1.202-.631 1.854-.631 2.14 0 3.874 1.734 3.874 3.874H15.58z"/>
        </svg>
      ),
      url: 'https://www.instagram.com/hishirusai/',
      color: 'from-[#3A3A3A] via-[#242424] to-[#3A3A3A]',
      description: 'Follow my art on Instagram'
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: 'https://web.facebook.com/HISHIRUSAI/',
      color: 'from-[#3A3A3A] via-[#242424] to-[#3A3A3A]',
      description: 'Connect with me on Facebook'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      url: 'https://x.com/home',
      color: 'from-[#3A3A3A] via-[#242424] to-[#3A3A3A]',
      description: 'Follow me on Twitter'
    }
  ]

  return (
    <section id="socials" className="c-space section-spacing scroll-mt-28 md:scroll-mt-36 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl -z-10"></div>
      <div className="text-center mb-16">
        <h2 className="[font-family:nebulax] Biggesthead text-center">SOCIAL MEDIA</h2>
        <p className="subtext max-w-2xl mx-auto mt-6">
          Connect with me across different platforms to see my latest work,
          behind-the-scenes content, and stay updated with my creative journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${social.color} hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl min-h-[200px]`}
          >
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold [font-family:nebulax] mb-3">
                {social.name}
              </h3>
              
              {/* Show email directly or description */}
              {social.name === 'Email' ? (
                <p className="text-white/90 mb-6 [font-family:montlight] text-lg font-medium">
                  Hishirusai@gmail.com
                </p>
              ) : (
                <p className="text-white/90 mb-6 [font-family:montlight]">
                  {social.description}
                </p>
              )}
              
              <div className="flex items-center justify-center gap-2 text-sm font-medium">
                <span>Follow me</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-16 h-16 border border-white/30 rounded-full" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/30 rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white/20 rounded-full" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Socials