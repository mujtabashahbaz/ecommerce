export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div 
        className="h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=2000)'
        }}
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Founded in 2020, LUXE has been at the forefront of creating innovative, high-quality makeup products that empower individuals to express their unique beauty. Our commitment to excellence drives us to source the finest ingredients and develop cutting-edge formulations that deliver exceptional results.
          </p>
          
          <p className="text-gray-600 mb-6">
            We believe that makeup is more than just cosmetics – it's an art form that allows everyone to create, express, and transform. Our products are designed to inspire creativity while maintaining the highest standards of quality and safety.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Our Values</h2>
          
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Cruelty-free and vegan-friendly products</li>
            <li>Sustainable packaging and ethical sourcing</li>
            <li>Inclusive beauty for all skin types and tones</li>
            <li>Innovation in formulation and application</li>
          </ul>
        </div>
      </div>
    </div>
  );
}