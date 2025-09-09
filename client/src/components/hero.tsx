export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Fullscreen Interactive Spline 3D Model */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src='https://my.spline.design/designportfolioherosection-71jcwULvwEyrfpgNY2YgCNFk/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          title="Interactive 3D Portfolio Hero"
          style={{ border: 'none' }}
        />
      </div>
    </section>
  );
}
