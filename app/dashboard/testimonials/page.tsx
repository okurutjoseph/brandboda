'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface TestimonialForm {
  clientName: string;
  company: string;
  testimonial: string;
}

const TestimonialsPage = () => {
  const [formData, setFormData] = useState<TestimonialForm>({
    clientName: '',
    company: '',
    testimonial: '',
  });
  const [clientImage, setClientImage] = useState<File | null>(null);
  const [companyLogo, setCompanyLogo] = useState<File | null>(null);
  const [clientImagePreview, setClientImagePreview] = useState<string | null>(null);
  const [companyLogoPreview, setCompanyLogoPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClientImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setClientImage(file);
      const url = URL.createObjectURL(file);
      setClientImagePreview(url);
    }
  };

  const handleCompanyLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCompanyLogo(file);
      const url = URL.createObjectURL(file);
      setCompanyLogoPreview(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Here you would typically:
      // 1. Upload both images to your storage
      // 2. Save the testimonial data to your database
      
      alert('Testimonial added successfully!');
      
      // Clear form
      setFormData({
        clientName: '',
        company: '',
        testimonial: '',
      });
      setClientImage(null);
      setCompanyLogo(null);
      setClientImagePreview(null);
      setCompanyLogoPreview(null);
    } catch (error) {
      alert('Error adding testimonial');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Add New Testimonial</h2>
      
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Client Details */}
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Client Name
              </label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Client Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleClientImageChange}
                className="w-full p-2 border rounded-lg"
                required
              />
              {clientImagePreview && (
                <div className="mt-2">
                  <img 
                    src={clientImagePreview} 
                    alt="Client Preview" 
                    className="w-24 h-24 object-cover rounded-full shadow-md"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Company Logo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleCompanyLogoChange}
                className="w-full p-2 border rounded-lg"
                required
              />
              {companyLogoPreview && (
                <div className="mt-2">
                  <img 
                    src={companyLogoPreview} 
                    alt="Company Logo Preview" 
                    className="h-16 object-contain rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Testimonial Text */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Testimonial
            </label>
            <textarea
              name="testimonial"
              value={formData.testimonial}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg h-48 resize-none"
              placeholder="Enter client's testimonial..."
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Adding Testimonial...' : 'Add Testimonial'}
          </button>
        </div>
      </form>

      {/* Testimonials List */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Existing Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* You would map through your testimonials here */}
          {/* This is a placeholder for demonstration */}
          <div className="border rounded-lg p-4">
            <p className="text-gray-500">No testimonials added yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage; 